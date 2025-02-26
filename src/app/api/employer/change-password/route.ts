import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Database Connection
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "peso_job_seeker",
});

// Secret Key for JWT
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key_here";

export async function POST(req: NextRequest) {
  let connection;
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const decoded: any = jwt.verify(token, SECRET_KEY);
    const employerId = decoded.id;

    const { newPassword } = await req.json();
    if (!newPassword) {
      return NextResponse.json({ message: "New password is required" }, { status: 400 });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    connection = await db.getConnection();
    const [result]: any = await connection.query(
      "UPDATE employer_register SET password = ? WHERE id = ?",
      [hashedPassword, employerId]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Password update failed!" }, { status: 500 });
    }

    return NextResponse.json({ message: "Password updated successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Error updating password:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}

import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// Function to create a database connection
async function connectToDB() {
  return await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "peso_job_seeker",
  });
}

// GET: Fetch all notifications with job details
export async function GET() {
  let db;
  try {
    db = await connectToDB();
    const [rows]: [any[], any] = await db.execute(
      `SELECT job_position, job_location, salary, job_type, skill_level, job_description, requirements, created_at 
      FROM job_posts ORDER BY created_at DESC`
    );
    return NextResponse.json(rows, { status: 200 });
  } catch (error: any) {
    console.error("Database error (GET Notifications):", error);
    return NextResponse.json({ error: "Failed to fetch notifications", details: error.message }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}

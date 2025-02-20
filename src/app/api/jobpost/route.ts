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

// GET: Fetch job posts
export async function GET() {
  let db;
  try {
    db = await connectToDB();
    const [rows]: [any[], any] = await db.execute("SELECT * FROM job_posts ORDER BY created_at DESC");
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch job posts" }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}

// POST: Add a new job post with notification
export async function POST(req: Request) {
  let db;
  try {
    const { position, location, salary, description } = await req.json();

    // Validate required fields
    if (!position || !location) {
      return NextResponse.json({ error: "Position and Location are required!" }, { status: 400 });
    }

    db = await connectToDB();
    await db.execute(
      "INSERT INTO job_posts (position, location, salary, description, created_at) VALUES (?, ?, ?, ?, NOW())",
      [position, location, salary || null, description || null]
    );

    // Fetch the newly inserted job post
    const [newJob]: [any[], any] = await db.execute("SELECT * FROM job_posts WHERE id = LAST_INSERT_ID()");

    return NextResponse.json(
      {
        message: "Job post added successfully!",
        job: newJob.length > 0 ? newJob[0] : {},
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to post job" }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}

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

// GET: Fetch all job posts
export async function GET() {
  let db;
  try {
    db = await connectToDB();
    const [rows]: [any[], any] = await db.execute("SELECT * FROM job_posts ORDER BY created_at DESC");
    return NextResponse.json(rows, { status: 200 });
  } catch (error: any) {
    console.error("Database error (GET):", error);
    return NextResponse.json({ error: "Failed to fetch job posts", details: error.message }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}

// POST: Add a new job post & create notification
export async function POST(req: Request) {
  let db;
  try {
    const body = await req.json();
    let { job_position, job_location, salary, job_type, skill_level, job_description, requirements } = body;

    if (!job_position || !job_location || !job_type || !skill_level) {
      return NextResponse.json({ error: "Required fields are missing!" }, { status: 400 });
    }

    if (!salary || isNaN(parseFloat(salary))) {
      salary = null;
    }

    db = await connectToDB();

    // Insert job post
    const [result]: any = await db.execute(
      `INSERT INTO job_posts 
      (job_position, job_location, salary, job_type, skill_level, job_description, requirements, created_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
      [job_position, job_location, salary, job_type, skill_level, job_description || null, requirements || null]
    );

    if (result.affectedRows === 0) {
      throw new Error("Insert failed, no rows affected.");
    }

    const [newJob]: [any[], any] = await db.execute("SELECT * FROM job_posts WHERE id = LAST_INSERT_ID()");

    // Insert notification
    const notificationMessage = `New job posted: ${job_position} in ${job_location}`;
    await db.execute(
      `INSERT INTO notifications (message, created_at) VALUES (?, NOW())`,
      [notificationMessage]
    );

    return NextResponse.json(
      {
        message: "Job post added successfully!",
        job: newJob.length > 0 ? newJob[0] : {},
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Database error (POST):", error);
    return NextResponse.json({ error: "Failed to post job", details: error.message }, { status: 500 });
  } finally {
    if (db) await db.end();
  }
}

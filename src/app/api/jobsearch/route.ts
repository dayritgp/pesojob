import db from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const position = searchParams.get("position");
  const location = searchParams.get("location");

  try {
    let query = `
    SELECT id, position, salary, description, location 
    FROM job_search
    WHERE 1=1
    `;

    if (position) {
      query += ` AND position LIKE '%${position}%'`;
    }
    if (location) {
      query += ` AND location LIKE '%${location}%'`;
    }

    console.log("Executing query:", query);

    const result = await db.query(query);
    const jobs = result[0] as any[];

    const formattedJobs = jobs.map((job: any) => ({
      id: job.id,
      position: job.position,
      salary: job.salary,
      description: job.description,
      location: job.location || "Unknown Location",
    }));

    return NextResponse.json(formattedJobs, { status: 200 });
  } catch (error: any) {
    console.error("Error in /api/search:", error);
    return NextResponse.json(
      { message: "Database Error", error: error.message },
      { status: 500 }
    );
  }
}

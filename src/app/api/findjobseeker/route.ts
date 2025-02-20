import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Database connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peso_job_seeker',
});

export async function GET(req: NextRequest) {
  try {
    // Fetch job seekers from the database
    const [rows]: any = await db.query('SELECT * FROM job_seekers');

    return NextResponse.json(rows, { status: 200 }); // Send raw array

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Failed to fetch job seekers' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mysql from 'mysql2/promise';

// Database connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peso_job_seeker',
});

// Secret key for JWT
const SECRET_KEY = 'your_secret_key_here';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      last_name, first_name, middle_name, suffix, date_of_birth, place_of_birth,
      sex, height_cm, contact_number, civil_status, email, password, tin_number,
      disabilities, employment_status, actively_looking, willing_to_work,
      availability_date, looking_duration, is_4ps_beneficiary, household_id,
      preferred_occupations, work_location, expected_salary, passport_no,
      passport_expiry, languages, educational_background, certifications,
      eligibility, work_experience, other_skills
    } = data;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into database
    const [result]: any = await db.query(
      `INSERT INTO job_seekers (
        last_name, first_name, middle_name, suffix, date_of_birth, place_of_birth,
        sex, height_cm, contact_number, civil_status, email, password, tin_number,
        disabilities, employment_status, actively_looking, willing_to_work,
        availability_date, looking_duration, is_4ps_beneficiary, household_id,
        preferred_occupations, work_location, expected_salary, passport_no,
        passport_expiry, languages, educational_background, certifications,
        eligibility, work_experience, other_skills
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        last_name, first_name, middle_name, suffix, date_of_birth, place_of_birth,
        sex, height_cm, contact_number, civil_status, email, hashedPassword, tin_number,
        JSON.stringify(disabilities), employment_status, actively_looking, willing_to_work,
        availability_date, looking_duration, is_4ps_beneficiary, household_id,
        JSON.stringify(preferred_occupations), work_location, expected_salary, passport_no,
        passport_expiry, JSON.stringify(languages), JSON.stringify(educational_background),
        JSON.stringify(certifications), JSON.stringify(eligibility),
        JSON.stringify(work_experience), JSON.stringify(other_skills)
      ]
    );

    // Generate JWT token
    const token = jwt.sign({ id: (result as any).insertId, email }, SECRET_KEY, { expiresIn: '1h' });

    return NextResponse.json({ success: true, token }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Registration failed' }, { status: 500 });
  }
}
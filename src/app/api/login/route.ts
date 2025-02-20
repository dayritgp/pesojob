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
    const { email, password } = await req.json();

    let query = 'SELECT * FROM job_seekers WHERE email = ?';
    let userType = 'job_seeker';
    let [rows]: any = await db.query(query, [email]);

    if (rows.length === 0) {
      query = 'SELECT * FROM employer_register WHERE email = ?';
      userType = 'employer';
      [rows] = await db.query(query, [email]);
    }

    if (rows.length === 0) {
      return NextResponse.json({ success: false, error: 'Invalid email or password' }, { status: 401 });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, error: 'Invalid email or password' }, { status: 401 });
    }

    const token = jwt.sign({ id: user.id, email: user.email, user_type: userType }, SECRET_KEY, { expiresIn: '1h' });

    return NextResponse.json({ success: true, token, user_type: userType }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Login failed' }, { status: 500 });
  }
}
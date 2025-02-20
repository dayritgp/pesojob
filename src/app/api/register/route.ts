import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { IncomingForm } from 'formidable'; // Correct import
import fs from 'fs';
import path from 'path';

// Database connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peso_job_seeker',
});

// Secret key for JWT
const SECRET_KEY = 'your_secret_key_here';

// Ensure the upload directory exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parser
  },
};

export async function POST(req: NextRequest) {
  const form = new IncomingForm({ uploadDir, keepExtensions: true }); // Correct instantiation

  return new Promise((resolve, reject) => {
    form.parse(req as any, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return resolve(NextResponse.json({ success: false, error: 'Form parsing failed' }, { status: 500 }));
      }

      try {
        const {
          email, password, user_type,
          businessName, tradeName, acronym, office, tinNumber, employerType,
          totalWorkForce, lineOfBusiness, address, barangay, city, province,
          ownerName, contactPersonName, contactPersonPosition, telephoneNumber, mobileNumber,
          faxNumber, contactEmail, certification,
        } = fields;

        // Hash the password
        if (typeof password !== 'string') {
          return resolve(NextResponse.json({ success: false, error: 'Invalid password' }, { status: 400 }));
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        // File paths for uploaded files
        const companyLogoPath = files.companyLogo ? files.companyLogo[0].newFilename : null;
        const businessPermitPath = files.businessPermit ? files.businessPermit[0].newFilename : null;
        const birForm2303Path = files.birForm2303 ? files.birForm2303[0].newFilename : null;
        const companyProfilePath = files.companyProfile ? files.companyProfile[0].newFilename : null;

        // Insert the employer data into the database
        const query = `
          INSERT INTO employer_register (
            email, password, business_name, trade_name, acronym, office, tin_number, employer_type, 
            total_work_force, line_of_business, address, barangay, city, province, company_logo, 
            owner_name, contact_person_name, contact_person_position, telephone_number, mobile_number, 
            fax_number, contact_email, business_permit, bir_form_2303, company_profile, certification
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
          email, hashedPassword, businessName, tradeName, acronym, office, tinNumber, employerType,
          totalWorkForce, lineOfBusiness, address, barangay, city, province, companyLogoPath,
          ownerName, contactPersonName, contactPersonPosition, telephoneNumber, mobileNumber,
          faxNumber, contactEmail, businessPermitPath, birForm2303Path, companyProfilePath,
          Array.isArray(certification) ? certification[0] === 'true' : certification === 'true', // Convert to boolean
        ];

        const [result]: any = await db.query(query, values);

        // Generate JWT token
        const token = jwt.sign({ id: result.insertId, email, user_type }, SECRET_KEY, { expiresIn: '1h' });

        return resolve(NextResponse.json({ success: true, token }, { status: 201 }));
      } catch (error) {
        console.error(error);
        return resolve(NextResponse.json({ success: false, error: 'Registration failed' }, { status: 500 }));
      }
    });
  });
}
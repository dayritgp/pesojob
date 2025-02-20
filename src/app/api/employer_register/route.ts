import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import path from 'path';

// Database connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'peso_job_seeker',
});

// Ensure the uploads directory exists
const uploadDir = path.join(process.cwd(), 'uploads');
await fs.mkdir(uploadDir, { recursive: true });

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Extract text fields
    const fields: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        fields[key] = value;
      }
    });

    // Hash the password
    const hashedPassword = await bcrypt.hash(fields.password, 10);

    // Handle file uploads
    async function saveFile(file: File | Blob | null) {
      if (!file) return null;
    
      if (!(file instanceof Blob)) {
        console.error('Received invalid file:', file);
        return null;
      }
    
      const fileArrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(fileArrayBuffer);
    
      const fileName = `upload_${Date.now()}`; // Generate a fallback filename
      const filePath = path.join(uploadDir, fileName);
    
      await fs.writeFile(filePath, buffer);
      return `/uploads/${fileName}`;
    }
    

    const companyLogoPath = await saveFile(formData.get('companyLogo') as File | null);
    const businessPermitPath = await saveFile(formData.get('businessPermit') as File | null);
    const birForm2303Path = await saveFile(formData.get('birForm2303') as File | null);
    const companyProfilePath = await saveFile(formData.get('companyProfile') as File | null);

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
      fields.email,
      hashedPassword,
      fields.businessName,
      fields.tradeName,
      fields.acronym,
      fields.office,
      fields.tinNumber,
      fields.employerType,
      fields.totalWorkForce,
      fields.lineOfBusiness,
      fields.address,
      fields.barangay,
      fields.city,
      fields.province,
      companyLogoPath,
      fields.ownerName,
      fields.contactPersonName,
      fields.contactPersonPosition,
      fields.telephoneNumber,
      fields.mobileNumber,
      fields.faxNumber,
      fields.contactEmail,
      businessPermitPath,
      birForm2303Path,
      companyProfilePath,
      fields.certification === 'true',
    ];

    const [result]: any = await db.query(query, values);

    if (result.affectedRows === 1) {
      return NextResponse.json({ success: true, message: 'Employer registered successfully' }, { status: 201 });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to register employer' }, { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Registration failed' }, { status: 500 });
  }
}

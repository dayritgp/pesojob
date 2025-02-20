"use client";
import Header from "@/app/components/header/page";
import Footer from "@/app/components/footer/page";
import { useState } from 'react';

export default function EmployerRegistration() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    businessName: '',
    tradeName: '',
    acronym: '',
    office: 'Main Office',
    tinNumber: '',
    employerType: 'Public',
    totalWorkForce: 0,
    lineOfBusiness: '',
    address: '',
    barangay: '',
    city: '',
    province: '',
    companyLogo: null,
    ownerName: '',
    contactPersonName: '',
    contactPersonPosition: '',
    telephoneNumber: '',
    mobileNumber: '',
    faxNumber: '',
    contactEmail: '',
    businessPermit: null,
    birForm2303: null,
    companyProfile: null,
    certification: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key as keyof typeof formData] !== null) {
        formDataToSend.append(key, formData[key as keyof typeof formData] as any);
      }
    }

    try {
      const response = await fetch('/api/employer_register', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        alert('Employer registered successfully');
        // Redirect or clear form
      } else {
        alert(data.error || 'Failed to register employer');
      }
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Employer Registration Form</h2>

        <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Account Details */}
          <section className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Add your content here */}
            <div className="-mt-4 -mx-4 px-4 py-2 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-lg font-semibold text-white">Account Details</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email"placeholder="Enter your email address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.email} onChange={handleChange}/>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" placeholder="Enter your password"className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.password}  onChange={handleChange}/>
              </div>
            </div>
          </section>

          {/* Establishment Details */}
          <section className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-4 -mx-4 px-4 py-2 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-lg font-semibold text-white">Establishment Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Business Name</label>
                <input type="text" name="businessName" placeholder="Enter business name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.businessName}  onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Trade Name</label>
                <input type="text"name="tradeName" placeholder="Enter trade name"className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.tradeName} onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Acronym/Abbreviation</label>
                <input type="text" name="acronym" placeholder="Enter your acronym/abbreviation" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"value={formData.acronym} onChange={handleChange}/>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Office</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="office" value="Main Office" checked={formData.office === 'Main Office'} onChange={handleChange} className="form-radio" />
                    <span className="text-sm">Main Office</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio"name="office" value="Branch" checked={formData.office === 'Branch'} onChange={handleChange} className="form-radio"/>
                    <span className="text-sm">Branch</span>
                  </label>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">TIN Number</label>
                <input type="text" name="tinNumber" placeholder="xxx-xxx-xxx-xxx" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"value={formData.tinNumber} onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Employer Type</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="employerType" value="Public" checked={formData.employerType === 'Public'} onChange={handleChange} className="form-radio" />
                    <span className="text-sm">Public</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="employerType" value="Private" checked={formData.employerType === 'Private'} onChange={handleChange} className="form-radio" />
                    <span className="text-sm">Private</span>
                  </label>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Total Work Force</label>
                <input type="number" name="totalWorkForce" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.totalWorkForce}  onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Line of Business/Industry</label>
                <input type="text" name="lineOfBusiness" placeholder="Enter line of business/industry eg. Legal Activities" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.lineOfBusiness} onChange={handleChange}  />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" name="address" placeholder="Street/Village" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"value={formData.address} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <input type="text" name="barangay" placeholder="Barangay" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.barangay}  onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <input type="text" name="city"  placeholder="Municipal/City" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.city} onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <input  type="text" name="province" placeholder="Province" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"value={formData.province} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">Upload Company Logo</label>
            <input type="file" name="companyLogo" accept="image/*" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={handleFileChange} />
          </div>
        </section>

          {/* Contact Details */}
          <section className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-4 -mx-4 px-4 py-2 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-lg font-semibold text-white">Establishment Contact Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Name of Owner/President</label>
                <input type="text" name="ownerName" placeholder="First Name + Middle Name + Last Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"value={formData.ownerName} onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Name of Contact Person</label>
                <input type="text"name="contactPersonName" placeholder="Enter name of contact person" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.contactPersonName} onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Position</label>
                <input type="text" name="contactPersonPosition" placeholder="Enter position" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.contactPersonPosition}onChange={handleChange}  />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Telephone Number</label>
                <input type="text" name="telephoneNumber" placeholder="xxx-xxxx"className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"value={formData.telephoneNumber} onChange={handleChange}/>
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="text" name="mobileNumber" placeholder="eg. 09112233445" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.mobileNumber} onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Fax Number</label>
                <input type="text" name="faxNumber"  placeholder="eg. 122-331-001" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"value={formData.faxNumber} onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email"name="contactEmail" placeholder="Enter your valid email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={formData.contactEmail} onChange={handleChange}  />
              </div>
            </div>
          </section>

          {/* Legal Documents */}
          <section className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-4 -mx-4 px-4 py-2 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-lg font-semibold text-white">Legal Documents</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Latest Business Permit</label>
                <input type="file" name="businessPermit" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">BIR Form #2303 (Photocopy)</label>
                <input type="file" name="birForm2303" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={handleChange}  />
              </div>
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Company Profile</label>
                <input type="file" name="companyProfile" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"onChange={handleChange} />
              </div>
            </div>
          </section>

          {/* Certification */}
          <section className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-4 -mx-4 px-4 py-2 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-lg font-semibold text-white">Certification/Authorization</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <input type="checkbox" name="certification" checked={formData.certification} onChange={handleChange} className="form-checkbox mt-1" />
                <p className="text-sm text-gray-600">
                  This is to certify that all data/information provided in this form are true to the best of my
                  knowledge. This is also to authorize the DOLE to include our profile in the PESO Employment
                  Information System (PEIS). It is understood that relevant information provided shall be made available
                  to those who have access to PEIS. I am also aware that DOLE is not obliged to seek applicants on our
                  behalf.
                </p>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Submit
              </button>
            </div>
          </section>
        </form>
      </div>
      <Footer />
    </>
  );
}
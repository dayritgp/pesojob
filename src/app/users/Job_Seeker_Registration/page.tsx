"use client"
import type React from "react"
import { useState } from "react"
import axios from "axios"
import Header from "@/app/components/header/page"
import Footer from "@/app/components/footer/page"

interface FormData {
  last_name: string
  first_name: string
  middle_name: string
  suffix: string
  date_of_birth: string
  place_of_birth: string
  sex: string
  height_cm: string
  contact_number: string
  civil_status: string
  email: string
  password: string
  tin_number: string
  disabilities: string[]
  employment_status: string
  actively_looking: string
  willing_to_work: string
  availability_date: string
  looking_duration: string
  is_4ps_beneficiary: string
  household_id: string
  preferred_occupations: string[]
  work_location: string
  expected_salary: string
  passport_no: string
  passport_expiry: string
  languages: {
    english: { read: boolean; write: boolean; speak: boolean; understand: boolean }
    filipino: { read: boolean; write: boolean; speak: boolean; understand: boolean }
    others: { read: boolean; write: boolean; speak: boolean; understand: boolean }
  }
  educational_background: {
    elementary: {
      school: string
      year_graduated: string
      undergraduate: string
      level: string
      year_last_attended: string
      awards: string
    }
    secondary: {
      school: string
      year_graduated: string
      undergraduate: string
      level: string
      year_last_attended: string
      awards: string
    }
    tertiary: {
      school: string
      course: string
      year_graduated: string
      undergraduate: string
      level: string
      year_last_attended: string
      awards: string
    }
    graduate: {
      school: string
      year_graduated: string
      undergraduate: string
      level: string
      year_last_attended: string
      awards: string
    }
  }
  certifications: Array<{
    course: string
    date_from: string
    date_to: string
    institution: string
    certificate: string
  }>
  eligibility: { civil_service: string; exam_date: string; professional_license: string; valid_until: string }
  work_experience: Array<{
    company: string
    address: string
    position: string
    date_from: string
    date_to: string
    status: string
  }>
  other_skills: string[]
}

export default function JobSeekerRegistration() {
  const [formData, setFormData] = useState<FormData>({
    last_name: "",
    first_name: "",
    middle_name: "",
    suffix: "",
    date_of_birth: "",
    place_of_birth: "",
    sex: "",
    height_cm: "",
    contact_number: "",
    civil_status: "",
    email: "",
    password: "",
    tin_number: "",
    disabilities: [],
    employment_status: "",
    actively_looking: "",
    willing_to_work: "",
    availability_date: "",
    looking_duration: "",
    is_4ps_beneficiary: "",
    household_id: "",
    preferred_occupations: ["", "", "", ""],
    work_location: "",
    expected_salary: "",
    passport_no: "",
    passport_expiry: "",
    languages: {
      english: { read: false, write: false, speak: false, understand: false },
      filipino: { read: false, write: false, speak: false, understand: false },
      others: { read: false, write: false, speak: false, understand: false },
    },
    educational_background: {
      elementary: { school: "", year_graduated: "", undergraduate: "", level: "", year_last_attended: "", awards: "" },
      secondary: { school: "", year_graduated: "", undergraduate: "", level: "", year_last_attended: "", awards: "" },
      tertiary: { school: "",course: "",year_graduated: "", undergraduate: "",level: "", year_last_attended: "",awards: "", },
      graduate: { school: "", year_graduated: "", undergraduate: "", level: "", year_last_attended: "", awards: "" },
    },
    certifications: [
      { course: "", date_from: "", date_to: "", institution: "", certificate: "" },
    ],
    eligibility: { civil_service: "", exam_date: "", professional_license: "", valid_until: "" },
    work_experience: [
      { company: "", address: "", position: "", date_from: "", date_to: "", status: "" },
    ],
    other_skills: [],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleNestedChange = (section: keyof FormData, field: string, value: string) => {
    setFormData((prevData) => {
      const sectionData = typeof prevData[section] === 'object' && prevData[section] !== null ? { ...prevData[section] } : {};
      const keys = field.split('.');
      let current: Record<string, any> = sectionData;
  
      for (let i = 0; i < keys.length - 1; i++) {
        if (typeof (current as Record<string, any>)[keys[i]] !== 'object') {
          (current as Record<string, any>)[keys[i]] = {};
        }
        current = (current as Record<string, any>)[keys[i]];
      }
  
      current[keys[keys.length - 1]] = value;
  
      return {
        ...prevData,
        [section]: sectionData,
      };
    });
  };

  const handleArrayChange = (index: number, field: keyof FormData, value: Record<string, string>) => {
    setFormData((prevData) => {
      const newArray = [...(prevData[field] as any[])]
      newArray[index] = { ...newArray[index], ...value }
      return { ...prevData, [field]: newArray }
    })
  }

  const handleCheckboxChange = (field: keyof FormData, value: string, checked: boolean) => {
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, [field]: [...(prevData[field] as string[]), value] }
      } else {
        return { ...prevData, [field]: (prevData[field] as string[]).filter((item) => item !== value) }
      }
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await axios.post("/api/jobseeker_register", formData)
      console.log("Form submitted", response.data)
    } catch (error) {
      console.error("There was an error submitting the form!", error)
    }
  }

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Form For JobSeeker</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="LAST NAME" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Enter your last name" />
              <InputField label="FIRST NAME" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="Enter your first name" />
              <InputField label="MIDDLE NAME" name="middle_name" value={formData.middle_name} onChange={handleChange} placeholder="Enter your middle name" />
              <SelectField label="SUFFIX" name="suffix" value={formData.suffix} onChange={handleChange} options={["None", "Jr.", "Sr.", "III"]} />
              <InputField label="DATE OF BIRTH" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} type="date" />
              <InputField label="PLACE OF BIRTH" name="place_of_birth" value={formData.place_of_birth} onChange={handleChange} placeholder="Enter your birth place" />
              <SelectField label="SEX" name="sex" value={formData.sex} onChange={handleChange} options={["Select", "Male", "Female"]} />
              <InputField label="Height(cm)" name="height_cm" value={formData.height_cm} onChange={handleChange} placeholder="In centimeter" className="w-32" />
              <InputField label="Contact Number" name="contact_number" value={formData.contact_number} onChange={handleChange} placeholder="eg. 09112233445" className="w-48" />
              <SelectField label="CIVIL STATUS" name="civil_status" value={formData.civil_status} onChange={handleChange} options={["Select", "Single", "Married", "Widowed", "Separated"]} />
              <InputField label="EMAIL" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Enter your email address" />
              <InputField label="Password" name="password" value={formData.password} onChange={handleChange} type="password" />
              <InputField label="TIN NUMBER" name="tin_number" value={formData.tin_number} onChange={handleChange} placeholder="xxx-xxx-xxx-xxx" className="w-48" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Disability</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "Deaf/Hard of Hearing",
                  "Intellectual Disability",
                  "Learning Disability",
                  "Mental Disability",
                  "Physical Disability",
                  "Orthopedic Disability",
                  "Psychosocial Disability",
                  "Speech and Language Impairment",
                  "Visual Disability",
                  "Cancer Disability",
                  "Rare Disease",
                ].map((disability) => (
                  <label key={disability} className="flex items-center space-x-2">
                    <input type="checkbox" checked={formData.disabilities.includes(disability)} onChange={(e) => handleCheckboxChange("disabilities", disability, e.target.checked)}className="form-checkbox"/>
                    <span className="text-sm">{disability}</span>
                  </label>
                ))}
              </div>
              <div className="space-y-1 mt-2">
                <label htmlFor="other_disability" className="block text-sm font-medium text-gray-700">
                  Other, specify:
                </label>
                <input type="text" id="other_disability" name="other_disability" onChange={(e) => handleCheckboxChange("disabilities", e.target.value, true)} className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
              </div>
            </div>
          </section>

          {/* Employment Status */}
          <section className="bg-white p-6 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Employment Status</h3>
            </div>
            <div className="space-y-4">
              <RadioGroup label="Employment Status" name="employment_status" value={formData.employment_status}onChange={handleChange} options={["Employed", "Unemployed"]} />
              <RadioGroup label="Are you actively looking for work?" name="actively_looking" value={formData.actively_looking}onChange={handleChange}  options={["Yes", "No"]} />
              <RadioGroup label="Willing to work immediately?" name="willing_to_work" value={formData.willing_to_work} onChange={handleChange}  options={["Yes", "No"]} />
              <InputField label="If no, when?"name="availability_date"value={formData.availability_date}onChange={handleChange} className="w-48"/>
              <InputField label="How long have you been looking for work?" name="looking_duration" value={formData.looking_duration}onChange={handleChange}  placeholder="in months" className="w-32"/>
              <RadioGroup label="Are you a 4Ps beneficiary?" name="is_4ps_beneficiary" value={formData.is_4ps_beneficiary} onChange={handleChange} options={["Yes", "No"]} />
              <InputField label="Household ID No."name="household_id" value={formData.household_id} onChange={handleChange} className="w-48"/>
            </div>
          </section>

          {/* Job Preferences */}
<section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
  <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
    <h3 className="text-xl font-semibold text-white">Job Preferences</h3>
  </div>
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">PREFERRED OCCUPATION</label>
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className="space-y-1 mb-2">
          <label htmlFor={`preferred_occupation_${num}`} className="block text-sm font-medium text-gray-700">{`${num}.`}</label>
          <input  type="text" id={`preferred_occupation_${num}`} name={`preferred_occupations[${num - 1}]`}
            onChange={(e) => {
              const newPreferredOccupations = [...formData.preferred_occupations];
              newPreferredOccupations[num - 1] = e.target.value;
              setFormData((prevData) => ({
                ...prevData,
                preferred_occupations: newPreferredOccupations,
              }));
            }}
            value={formData.preferred_occupations[num - 1]}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
        </div>
      ))}
    </div>
    <RadioGroup label="PREFERRED WORK LOCATION" name="work_location" value={formData.work_location} onChange={handleChange} options={["Local", "Overseas"]} />
    <InputField  label="Expected Salary (Range):"name="expected_salary" value={formData.expected_salary} onChange={handleChange} className="w-48" />
    <InputField label="Passport No.:" name="passport_no" value={formData.passport_no} onChange={handleChange} className="w-48" />
    <InputField label="Expiry Date:" name="passport_expiry"value={formData.passport_expiry} onChange={handleChange} type="date" className="w-48" />
  </div>
</section>

          {/* Language Proficiency */}
          <section className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Language/Dialect Proficiency</h3>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2 text-left">Language</th>
                  <th className="p-2">Read</th>
                  <th className="p-2">Write</th>
                  <th className="p-2">Speak</th>
                  <th className="p-2">Understand</th>
                </tr>
              </thead>
              <tbody>
                {["English", "Filipino", "Others"].map((lang) => (
                  <tr key={lang}>
                    <td className="p-2">{lang}</td>
                    {["read", "write", "speak", "understand"].map((skill) => (
                      <td key={skill} className="p-2 text-center">
                        <input type="checkbox"
                          checked={
                            formData.languages[lang.toLowerCase() as keyof typeof formData.languages][
                              skill as keyof (typeof formData.languages)["english"]
                            ]
                          }
                          onChange={(e) => {
                            setFormData((prevData) => ({
                              ...prevData,
                              languages: {
                                ...prevData.languages,
                                [lang.toLowerCase()]: {
                                  ...prevData.languages[lang.toLowerCase() as keyof typeof prevData.languages],
                                  [skill]: e.target.checked,
                                },
                              },
                            }))
                          }}
                          className="form-checkbox"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Educational Background */}
<section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
  <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
    <h3 className="text-xl font-semibold text-white">Educational Background</h3>
  </div>
  {["elementary", "secondary", "tertiary", "graduate"].map((level) => (
    <div key={level} className="mb-6 last:mb-0">
      <h4 className="text-lg font-medium mb-3">{level.toUpperCase()}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="School" name={`${level}.school`}value={formData.educational_background[level as keyof typeof formData.educational_background].school} onChange={(e) => handleNestedChange("educational_background", `${level}.school`, e.target.value)}/>
        {level === "tertiary" && (
          <InputField label="Course" name={`${level}.course`} value={(formData.educational_background[level as keyof typeof formData.educational_background] as any).course} onChange={(e) => handleNestedChange("educational_background", `${level}.course`, e.target.value)}/> )}
        <InputField label="Year graduated"  name={`${level}.year_graduated`} value={formData.educational_background[level as keyof typeof formData.educational_background].year_graduated} onChange={(e) => handleNestedChange("educational_background", `${level}.year_graduated`, e.target.value)}className="w-32" />
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Are you an undergraduate?</label>
          <div className="flex space-x-4">
            <RadioGroup name={`${level}.undergraduate`} value={formData.educational_background[level as keyof typeof formData.educational_background].undergraduate} onChange={(e) => handleNestedChange("educational_background", `${level}.undergraduate`, e.target.value)} options={["Yes", "No"]}label="" />
          </div>
        </div>
        <InputField label="What Level?" name={`${level}.level`} value={formData.educational_background[level as keyof typeof formData.educational_background].level} onChange={(e) => handleNestedChange("educational_background", `${level}.level`, e.target.value)}/>
        <InputField label="Year Last Attended" name={`${level}.year_last_attended`} value={formData.educational_background[level as keyof typeof formData.educational_background].year_last_attended} onChange={(e) => handleNestedChange("educational_background", `${level}.year_last_attended`, e.target.value)}className="w-32"/>
        <InputField label="Awards Received" name={`${level}.awards`} value={formData.educational_background[level as keyof typeof formData.educational_background].awards} onChange={(e) => handleNestedChange("educational_background", `${level}.awards`, e.target.value)} />
      </div>
    </div>
  ))}
</section>

          {/* Certification/Training */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Certification/Training</h3>
            </div>
            {formData.certifications.map((certification, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <InputField label="Training/Vocational Course" name={`certifications[${index}].course`} value={certification.course} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "certifications", { course: e.target.value })}/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <InputField label="Date From" name={`certifications[${index}].date_from`} value={certification.date_from} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "certifications", { date_from: e.target.value })} type="date" className="w-48" />
                  <InputField label="Date To" name={`certifications[${index}].date_to`} value={certification.date_to} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "certifications", { date_to: e.target.value })} type="date" className="w-48" />
                </div>
                <InputField label="Training Institution" name={`certifications[${index}].institution`} value={certification.institution} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "certifications", { institution: e.target.value })}/>
                <InputField label="Certificates Received" name={`certifications[${index}].certificate`} value={certification.certificate} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "certifications", { certificate: e.target.value })} />
              </div>
            ))}
          </section>

          {/* Eligibility/License */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Eligibility/License</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SelectField label="ELIGIBILITY(Civil Service)" name="eligibility.civil_service" value={formData.eligibility.civil_service} onChange={(e: { target: { value: string } }) => handleNestedChange("eligibility", "civil_service", e.target.value)} options={["Select", "Option 1", "Option 2"]} />
              <InputField label="Date of Examination" name="eligibility.exam_date" value={formData.eligibility.exam_date} onChange={(e: { target: { value: string } }) => handleNestedChange("eligibility", "exam_date", e.target.value)} type="date"className="w-48" />
              <SelectField label="PROFESSIONAL LICENSE(PRC)"  name="eligibility.professional_license" value={formData.eligibility.professional_license} onChange={(e: { target: { value: string } }) => handleNestedChange("eligibility", "professional_license", e.target.value)} options={["Select", "Option 1", "Option 2"]} />
              <InputField label="Valid Until" name="eligibility.valid_until" value={formData.eligibility.valid_until} onChange={(e: { target: { value: string } }) => handleNestedChange("eligibility", "valid_until", e.target.value)}type="date" className="w-48" />
            </div>
          </section>

          {/* Work Experience */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Work Experience</h3>
            </div>
            {formData.work_experience.map((experience, index) => (
              <div key={index} className="mb-6 last:mb-0 border-b pb-6">
                <InputField label="Company Name" name={`work_experience[${index}].company`} value={experience.company} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "work_experience", { company: e.target.value })}/>
                <InputField label="Address" name={`work_experience[${index}].address`} value={experience.address} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "work_experience", { address: e.target.value })} />
                <InputField label="Position" name={`work_experience[${index}].position`} value={experience.position} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "work_experience", { position: e.target.value })}/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <InputField label="Date From" name={`work_experience[${index}].date_from`} value={experience.date_from} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "work_experience", { date_from: e.target.value })} type="date" className="w-48" />
                  <InputField label="Date To" name={`work_experience[${index}].date_to`} value={experience.date_to} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "work_experience", { date_to: e.target.value })} type="date" className="w-48" />
                </div>
                <SelectField label="STATUS" name={`work_experience[${index}].status`} value={experience.status} onChange={(e: { target: { value: any } }) => handleArrayChange(index, "work_experience", { status: e.target.value })} options={["Select", "Full-time", "Part-time", "Contract"]} />
              </div>
            ))}
          </section>

          {/* Other Skills */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Other Skills</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Auto Mechanic",
                "Beautician",
                "Carpentry Work",
                "Computer Literate",
                "Domestic Chores",
                "Driver",
                "Electrician",
                "Embroidery",
                "Gardening",
                "Masonry",
                "Painter/Artist",
                "Painting jobs",
                "Photography",
                "Plumbing",
                "Sewing Dresses",
                "Stenography",
                "Tailoring",
              ].map((skill) => (
                <label key={skill} className="flex items-center space-x-2">
                  <input type="checkbox"checked={formData.other_skills.includes(skill)}onChange={(e) => handleCheckboxChange("other_skills", skill, e.target.checked)} className="form-checkbox"/>
                  <span className="text-sm">{skill}</span>
                </label>
              ))}
            </div>
            <div className="space-y-1 mt-4">
              <label htmlFor="other_skills" className="block text-sm font-medium text-gray-700">
                Others:
              </label>
              <input type="text" id="other_skills" name="other_skills" onChange={(e) => handleCheckboxChange("other_skills", e.target.value, true)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </div>
          </section>

          {/* Certification/Authorization */}
          <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="-mt-6 -mx-6 px-6 pb-2 py-4 mb-4 rounded-t-lg bg-gray-500">
              <h3 className="text-xl font-semibold text-white">Certification/Authorization</h3>
            </div>
            <p className="mb-4 text-sm">
              This is to certify that all data/information that I have provided in this form are true to the best of my
              knowledge. This Is also to authorized the DOLE to include my profile in the PESO Employment Information
              System , which is a subsystem of the PhilJobNet. It is understood that my name shall be made available to
              employers who have access to the Registry. I am also aware that DOLE is not obliged to seek employment on
              my behalf.
            </p>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" >
              Submit
            </button>
          </section>
        </form>
      </div>
      <Footer />
    </>
  )
}

const InputField = ({ label, name, value, onChange, type = "text", placeholder = "", className = "" }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; type?: string; placeholder?: string; className?: string }) => (
  <div className="space-y-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}/>
  </div>
)

const SelectField = ({ label, name, value, onChange, options }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: string[] }) => (
  <div className="space-y-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <select id={name} name={name} value={value}onChange={onChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      {options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)

const RadioGroup = ({ label, name, value, onChange, options }: { label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; options: string[] }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="flex space-x-4">
      {options.map((option: string) => (
        <label key={option} className="flex items-center space-x-2">
          <input type="radio" name={name} value={option} checked={value === option} onChange={onChange} className="form-radio" />
          <span className="text-sm">{option}</span>
        </label>
      ))}
    </div>
  </div>
)


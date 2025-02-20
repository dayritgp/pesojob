import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-36">
      <div className="container mx-auto px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          <div>
            <h4 className="font-semibold text-lg mb-3">Job Seekers</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Job Search</Link></li>
              <li><Link href="#" className="hover:underline">Profile</Link></li>
              <li><Link href="#" className="hover:underline">Recommended Jobs</Link></li>
              <li><Link href="#" className="hover:underline">Job Applications</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Employers</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Register for free</Link></li>
              <li><Link href="#" className="hover:underline">Post a Job ad</Link></li>
              <li><Link href="#" className="hover:underline">Customer Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">About PESO Gensan</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Partner Services</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Help Centre</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div className="flex space-x-4">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms & Conditions</Link>
            <Link href="#" className="hover:underline">Safe Job Search Guide</Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p>&copy; 2024 PESO JobPortal</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

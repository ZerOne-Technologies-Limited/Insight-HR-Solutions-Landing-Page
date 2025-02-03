import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Building2 } from 'lucide-react';

import construction from './assets/Construction.jpg';
import special_services from './assets/Special_Services.jpg';
import civil_eng from './assets/Civil-Engineering.jpg';
import office_supply from './assets/Furniture.jpg';
import hr from './assets/Hr_Solutions.jpg';
import electrical_sup from './assets/electrical_supply.jpg';
import healthcare from './assets/healthcare.jpg';
import minning from './assets/minning.jpg';
import supply from './assets/supply.jpg'

const services = [
  {
    category: "HR and professional services",
    image: hr,
    details: "Payroll Management, Staff Outsourcing, Expatriate Services, Recruitment/Head hunting, and Training and Development.",
    text: [
      "Payroll Management - Managing client’s payroll, including taxes (PAYE) and social security.",
      "Staff outsourcing - Helps reduce costs and allows businesses to focus on core activities.",
      "Expatriate Services - Corporate Immigration, Visa services, Accommodation & Transportation.",
      "Recruitment/Headhunting - Helping organizations find the best fit for vacancies.",
      "Training and Development - Custom in-house training for employee orientation, skill enhancement, and technical certification."
    ],
  },
  {
    category: "Civil Infrastructure",
    image: construction,
    details: "Specialized in building construction, infrastructure, and supplies for various projects.",
    text: [
      "Building Construction - Includes foundation works, bricklaying, electrical installations, plumbing, and landscaping.",
      "Civil Infrastructure - Drainage, water supply, stormwater management, and electrical ducts.",
      "Contractual Works - Labor Hire, Installation & Repair of Electrical Accessories, and Skilled & Unskilled Workers.",
      "Supplies - Earth moving equipment."
    ],
  },
  {
    category: "Engineering and Mining",
    image: minning,
    details: "Specializing in metal fabrication and mining services, providing equipment and resources for various industries.",
    text: [
      "Metal Fabrication - Custom grills, gates, roofing, and sliding gates.",
      "Mining and Supplies - Offering Copper, Limestone, Quartz Stone, Manganese, Silica Sand, and Molding Sand.",
      "Electrical Supplies and Installations - Providing electrical solutions for construction and infrastructure."
    ],
  },
  {
    category: "Health Care and Special Services",
    image: healthcare,
    details: "Cleaning services for commercial and healthcare spaces, along with play park and entertainment services.",
    text: [
      "Cleaning Services - Includes fumigation, disinfecting, and pest control for warehouses, hospitals, and homes.",
      "Special Intensive Care Unit Cleaning - Offering specialized cleaning for hospitals, mortuaries, and clinics.",
      "Play Park Services - Installation and maintenance of playground equipment, entertainment, and gardening services.",
      "Disinfectant Chemicals - Supply of disinfectant chemicals against cholera, COVID-19, etc."
    ],
  },
  {
    category: "Supplies",
    image: supply,
    details: "General Supply of good and services",
    text: [
      " Stationary office furniture (chairs, tables, drawers and shelves)", 
      " ⁠motor vehicles ",
      "⁠medical supplies and equipment",
    ],
  },
];

const ServicesPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-transparent"} py-5`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className={`flex items-center space-x-2 text-lg font-semibold transition-colors duration-300 ${isScrolled ? "text-blue-800" : "text-blue-800"}`}
          >
            <ChevronLeft className="h-6 w-6" />
            <span>Back to Home</span>
          </button>
        </div>
      </nav>
    <div id="top" className="container mx-auto px-4 sm:px-6 py-12 bg-blue-50 pt-16">


      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-12 text-blue-800">Our Services</h1>
      <div className="space-y-10 sm:space-y-20">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center sm:even:flex-row-reverse transition-all duration-500 hover:scale-[1.02]">
            <div className="sm:w-1/2 p-4 sm:p-6">
              <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-blue-700">{service.category}</h2>
              <p className="text-base sm:text-lg text-black-600 mb-2 sm:mb-4">{service.details}</p>
              <ul className="list-disc pl-4 sm:pl-6 text-black-500 space-y-1 sm:space-y-2">
                {service.text.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="sm:w-1/2">
              <img
                src={service.image}
                alt={service.category}
                className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-16 text-center bg-blue-100 p-6 sm:p-10 rounded-lg shadow-lg text-blue-900">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-4">Contact Us</h2>
        <p className="text-base sm:text-lg">Plot. 205 Kanyanta Avenue, Unit 1 Soho park - Kitwe</p>
        <p className="text-base sm:text-lg">P.O. Box 260027, Kitwe - Zambia</p>
        <p className="text-base sm:text-lg">Cell: +260 973 011 428</p>
        <p className="text-base sm:text-lg">WhatsApp: +27 77 387-9866</p>
        <p className="text-base sm:text-lg">Email: elazakcm@gmail.com</p>
      </div>
      <div className="mt-6  text-center">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
        
          Back to Home
        </button>
      </div>
    </div>
    </div>
  );
};

export default ServicesPage;

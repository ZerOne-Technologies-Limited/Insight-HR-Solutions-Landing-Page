import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu , ChevronLeft, X, Phone, Mail, Building2, HardHat, Pickaxe, Sparkles, ChevronRight,CheckCircle, Send, MapPin } from 'lucide-react';

import construction from './assets/Construction.jpg'
import special_services from './assets/Special_Services.jpg'
import civil_eng from './assets/Civil-Engineering.jpg'
import office_supply from './assets/Furniture.jpg'
import hr from './assets/Hr_Solutions.jpg'
import electrical_sup from './assets/electrical_supply.jpg'
import healthcare from './assets/healthcare.jpg'
import minning from './assets/minning.jpg'


const services = [
  {
    category: "HR Solutions",
    image: hr,
    details: "Comprehensive HR services including payroll management, outsourcing, expatriate support, and talent acquisition to help businesses streamline operations.",
    items: [
      "Payroll Management",
      "Staff Outsourcing",
      "Expatriate Services",
      "Recruitment/Head Hunting",
      "Training & Development",
    ],
  },
  {
    category: "Building Construction",
    image: construction,
    details: "Expertise in residential, commercial, and industrial construction, covering everything from foundation work to final finishes.",
    items: [
      "Commercial, Industrial & Residential Construction",
      "Foundation Works, Electrical Installations, Plumbing",
      "Painting, Landscaping, Interior & Exterior Decorating",
    ],
  },
  {
    category: "Civil Infrastructure",
    image: civil_eng,
    details: "Specialized in large-scale infrastructure projects such as drainage, water supply, and electrical duct installation.",
    items: [
      "Drainage, Sewerage & Stormwater Management",
      "Water Supply & Electrical Ducts",
      "Labor Hire, Instrumentation & Electrical Repairs",
    ],
  },
  {
    category: "Supplies",
    image: "/images/supplies.jpg",
    details: "Supplier of industrial equipment, office essentials, and heavy-duty machinery spares for businesses of all sizes.",
    items: [
      "Earth-moving Equipment & Motor Vehicles",
      "Heavy-duty Equipment Spares & Stationery",
      "Office Equipment & Tyres",
    ],
  },
  {
    category: "Engineering Department",
    image: "/images/engineering.jpg",
    details: "Providing metal fabrication services along with vehicle repairs and maintenance solutions.",
    items: [
      "Metal Fabrication (Grills, Gates, Roofing)",
      "Motor Vehicle Repairs & Services",
    ],
  },
  {
    category: "Mining and Supplies",
    image: minning,
    details: "Trusted provider of high-quality mining resources such as limestone, quartz, and silica sand.",
    items: [
      "Limestone, Quartz Stone, Manganese",
      "Silica Sand & Molding Sand",
    ],
  },
  {
    category: "Special Services Unit & Healthcare",
    image: healthcare,
    details: "Expert cleaning and sanitation services tailored for commercial spaces, healthcare facilities, and industrial setups.",
    items: [
      "Cleaning Services: Fumigation, Pest Control, Degreasing",
      "Healthcare Cleaning: Hospitals, Clinics, ICU, Mortuaries",
    ],
  },
  {
    category: "Play Park Services",
    image: special_services,
    details: "Installation and maintenance of recreational spaces, offering entertainment solutions for parks and events.",
    items: [
      "Playground Equipment Installation & Maintenance",
      "Entertainment: Music, Sports, Concerts",
      "Gardening & Green Space Maintenance",
    ],
  },
  {
    category: "Electrical Supply & Installations",
    image: electrical_sup,
    details: "High-quality electrical solutions for construction and industrial applications.",
    items: ["Electrical Services for Construction & Infrastructure"],
  },
  {
    category: "Office Furniture Supply",
    image: office_supply,
    details: "Supplying premium office furniture designed for comfort, productivity, and style.",
    items: ["Office Furniture for Businesses"],
  },
];

const ServicesPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
            {/* Navigation */}
        {/* Navigation */}
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        } py-3`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className={`flex items-center space-x-2 text-lg font-semibold transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-black"
            }`}
          >
            <ChevronLeft className="h-6 w-6" />
            <span>Back to Home</span>
          </button>
        </div>
      </nav>

      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-12 text-primary">Our Services</h1>
      <div className="space-y-10 sm:space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:even:flex-row-reverse transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="sm:w-1/2 p-4 sm:p-6">
              <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-secondary">{service.category}</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-2 sm:mb-4">{service.details}</p>
              <ul className="list-disc pl-4 sm:pl-6 text-gray-600 space-y-1 sm:space-y-2">
                {service.items.map((item, idx) => (
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
      <div className="mt-10 sm:mt-16 text-center bg-primary-light p-6 sm:p-10 rounded-lg shadow-lg text-black">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-2 sm:mb-4">Contact Us</h2>
        <p className="text-base sm:text-lg">Plot No. 205, Kanyanta Avenue, Unit 1, SOHO Park, SOHO.</p>
        <p className="text-base sm:text-lg">P.O. Box 260027, Kitwe - Zambia</p>
        <p className="text-base sm:text-lg">Cell: +260 973 011 428</p>
        <p className="text-base sm:text-lg">WhatsApp: +27 (77) 387-9866</p>
        <p className="text-base sm:text-lg">Email: elazakcm@gmail.com</p>
      </div>
      <div className="mt-6 text-center">
        <button 
          onClick={() => navigate("/")}
          className="bg-secondary text-black px-4 py-2 rounded-lg shadow hover:bg-opacity-80 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;

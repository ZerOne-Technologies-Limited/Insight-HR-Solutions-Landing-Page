import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Building2, HardHat, Pickaxe, Sparkles, ChevronRight, CheckCircle, Send, MapPin } from 'lucide-react';
import homebg from './assets/homebg.jpg'
import company from './assets/company.jpg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeService, setActiveService] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveService((prevService) => (prevService + 1) % services.length);
    }, 3000); // Change service every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount or when activeService changes
  }, [activeService]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const servicesRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [visibleServices, setVisibleServices] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleServices((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Building2 className="w-16 h-16 text-blue-600" />,
      title: "HR Solutions",
      description: "Comprehensive HR services including payroll management, staff outsourcing, and recruitment.",
      details: [
        "Payroll Management",
        "Staff Outsourcing",
        "Expatriate Services",
        "Recruitment/Head Hunting",
        "Training & Development"
      ],
      
    },
    {
      icon: <HardHat className="w-16 h-16 text-blue-600" />,
      title: "Civil Infrastructure",
      description: "Expert building construction and civil infrastructure projects.",
      details: [
        "Building Construction",
        "Civil Infrastructure",
        "Metal Fabrication",
        "Electrical Installations",
        "Motor Vehicle Repairs"
      ],
      
    },
    {
      icon: <Pickaxe className="w-16 h-16 text-blue-600" />,
      title: "Engineering",
      description: "Supply and processing of minerals, equipment, and industrial materials.",
      details: [
        "Mineral Processing",
        "Equipment Supply",
        "Vehicle Spares",
        "Industrial Materials",
        "Technical Support"
      ],
      
    },
    {
      icon: <Sparkles className="w-16 h-16 text-blue-600" />,
      title: "Health Care & Special Services",
      description: "Cleaning, hygiene, play park services, and entertainment solutions.",
      details: [
        "Cleaning & Hygiene",
        "Play Park Services",
        "Entertainment Solutions",
        "Gardening Services",
        "Safety Compliance",
        "Electrical supply and installatioin",
        "office furniture supply"
      ],
      image: "/assets/web-development.png"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#home">
                {/* <span className={`text-2xl font-bold transition-colors duration-300 ${scrollPosition > 50 ? 'text-blue-600' : 'text-white'
                  }`}>
                  Insight HR Solutions
                </span> */}
                <span className={`text-xl sm:text-2xl font-bold transition-colors duration-300 ${scrollPosition > 50 ? 'text-blue-600' : 'text-white'}`}>
                  Insight HR Solutions
                </span>
              </a>

            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}>Services</a>
              <a href="#about" className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}>About</a>
              <a href="#contact" className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}>Contact</a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors duration-300 ${scrollPosition > 50 ? 'text-gray-700' : 'text-white'
                  }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          // backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundImage: `url(${homebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="absolute inset-0 bg-blue-900/30"></div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              {/* <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Transforming Business
                <span className="block text-blue-400">Through Innovation</span>
              </h1> */}
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Transforming Business
                <span className="block text-blue-400">Through Innovation</span>
              </h1>
              <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                Insight HR Solutions offers experienced and comprehensive HR Solutions for a wide range of
                business needs. From HR management to construction, mining, and specialized services -
                we deliver excellence across industries in Zambia and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#services">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center">
                    Explore Our Services <ChevronRight className="ml-2" />
                  </button>
                </a>
                <a href="#contact">
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Services Section */}
      <section
        id="services"
        className="py-40 bg-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/background-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/30 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20 animate-slide-in">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your business needs with expertise and precision.
            </p>
          </div>

          {/* Service Navigation (Floating Buttons) */}
          <div className="relative flex flex-wrap justify-center gap-4 mb-12 z-10">
            {services.map((service, index) => (
              <button
                key={index}
                className={`flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 transform 
            ${activeService === index ? "bg-blue-700 text-white scale-105 shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-blue-200 hover:scale-105"}
          `}
                onClick={() => {
                  setActiveService(index);
                  // Stop the automatic switch when a service is clicked
                }}
                style={{ marginBottom: "-20px" }} // Slight overlap
              >
                <span className={`${activeService === index ? "text-white" : "text-blue-600"}`}>
                  {service.icon}
                </span>
                <span className="hidden md:inline">{service.title}</span>
              </button>

            ))}
          </div>


          {/* Service Details Card */}
          <div className="relative bg-white rounded-2xl p-10 shadow-xl transition-all duration-500 flex flex-col md:flex-row items-center gap-8 transform hover:scale-105">
            {/* <img
          src= {services[activeService].image}
          alt={services[activeService].title}
          className="w-64 rounded-lg shadow-md"
          style={{ filter: 'blur(0.5px)' }} // Adjust the blur value as needed
        /> */}
        <div className="flex-1">
          <div className="flex items-center mb-8">
            <div className="p-4 bg-blue-50 rounded-xl">{services[activeService].icon}</div>
            <h3 className="text-3xl font-bold text-gray-900 ml-4">
              {services[activeService].title}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services[activeService].details.map((detail, index) => (
              <div
                key={index}
                onClick={() => navigate("/services")}
                className="flex items-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span  className="text-gray-700">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => navigate("/services")} className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center">
        View All Services <ChevronRight className="ml-2" />
      </button>
      </div>


    </div>
  </section>


      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="relative">
                <img
                  // src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  src={company}
                  alt="Office"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-8 rounded-2xl hidden lg:block">
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                About Insight HR Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Based in Kitwe, Zambia, we are a multifaceted company offering professional
                services across various industries. Our commitment to excellence and comprehensive
                approach makes us the partner of choice for businesses seeking growth and efficiency.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From HR management to construction, mining, and specialized services, we bring
                expertise and reliability to every project we undertake.
              </p>
              <a href="#contact">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center">
                  Learn More About Us <ChevronRight className="ml-2" />
                </button>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-slide-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Ready to transform your business? Contact us today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="md:col-span-1 space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <Phone className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600">+27 (77) 387-9866</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <Mail className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">elazakcm@gmail.com</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <MapPin className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-600">Plot No. 205, Kanyanta Avenue, Unit 1</p>
                  <p className="text-gray-600">Kitwe, Zambia.</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <form className="contact-form space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="john@example.com" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject">Subject</label>
                      <input type="text" id="subject" placeholder="How can we help you?" />
                    </div>

                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us more about your needs..."
                        className="resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transform hover:scale-102 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Insight HR Solutions</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Your Complete Business Solutions Partner in Zambia
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-gray-500">© {new Date().getFullYear()} Insight HR Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
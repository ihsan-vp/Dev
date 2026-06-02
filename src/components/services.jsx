import "./services.css";

function services() {
  const autoServices = [
    {
      id: 1,
      title: "Engine Diagnostics & Repair",
      description: "Using state-of-the-art computer diagnostic equipment to pinpoint engine issues precisely. We handle everything from timing belts to complete overhauls.",
      specialty: "Advanced ECU scanning & real-time performance tuning.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh93yJ-ufvDzfsGQZtUlwET-AZiGJdaiuBTQ&s"
    },
    {
      id: 2,
      title: "Brake & Suspension Service",
      description: "Complete brake pad replacement, rotor resurfacing, and suspension calibration to ensure your vehicle handles safely under any road conditions.",
      specialty: "Precision alignment and high-performance ceramic brake upgrades.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "Transmission & Gearbox",
      description: "Routine transmission fluid flushes, clutch adjustments, and complete automatic/manual gearbox rebuilding by certified specialists.",
      specialty: "Expertise in both classic manuals and modern dual-clutch (DCT) systems.",
      image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "Premium Auto Detailing",
      description: "Deep exterior foam washing, multi-stage paint correction, leather conditioning, and long-lasting protective coat applications.",
      specialty: "9H Ceramic Coating with a 3-year shine warranty.",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      title: "Electrical & AC Systems",
      description: "Troubleshooting complex wiring shorts, battery management system resets, and full climate control/AC recharging services.",
      specialty: "Eco-friendly R1234yf refrigerant servicing.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      title: "Hybrid & EV Maintenance",
      description: "Specialized care for high-voltage battery packs, regenerative braking systems, and electric drive motor cooling systems.",
      specialty: "Certified factory-grade diagnostic software for all major EV brands.",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&auto=format&fit=crop&q=60"
    }
  ];

  const handleBookService = (serviceTitle) => {
    alert(`Booking request received for: ${serviceTitle}`);
  };

  return (
    <div className="services-container" id="services">
      <header className="services-header">
        <h1>Our Elite Auto Services</h1>
        <p>Professional automotive care backed by certified mechanics, cutting-edge tech, and a passion for precision.</p>
      </header>

      <div className="services-grid">
        {autoServices.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-img-wrapper">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            
            <div className="service-content">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.description}</p>
              
              <div className="specialty-badge">
                <strong>Our Specialty:</strong> {service.specialty}
              </div>

            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default services;
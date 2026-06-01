import "./about.css";

function About() {
  // Array containing data for the 6 auto spare items
  const items = [
    {
      id: 1,
      title: "Carbon-Ceramic Brake Rotors",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&auto=format&fit=crop&q=60",
      specs: "High-Heat Resistance | Cross-Drilled | Ultra-Lightweight",
    },
    {
      id: 2,
      title: "Twin-Scroll Turbocharger",
      image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=500&auto=format&fit=crop&q=60",
      specs: "Billet Compressor Wheel | Up to 30 PSI | Anti-Surge Housing",
    },
    {
      id: 3,
      title: "Alcantara Sport Steering Wheel",
      image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=500&auto=format&fit=crop&q=60",
      specs: "Ergonomic Grip | Integrated Paddle Shifters | Carbon Fiber Trim",
    },
    {
      id: 4,
      title: "Laser Iridium Spark Plugs",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&auto=format&fit=crop&q=60",
      specs: "0.6mm Fine Wire Tip | 100k Mile Lifespan | Maximum Ignitability",
    },
    {
      id: 5,
      title: "Adjustable Coilover Suspension",
      image: "https://static.vecteezy.com/system/resources/thumbnails/050/358/555/small/closeup-of-the-suspension-dampers-in-action-as-the-vehicle-goes-over-a-speed-p-showcasing-their-role-in-maintaining-a-comfortable-ride-and-reducing-vibrations-photo.jpg",
      specs: "32-Way Dampening | Monotube Shock Design | Ride Height Adjustable",
    },
    {
      id: 6,
      title: "Cold Air Intake System",
      image: "https://m.media-amazon.com/images/I/71+I7tvRI2L._AC_UF350,350_QL80_.jpg",
      specs: "Mandrel-Bent Aluminum | Washable Dry Filter | +15 HP Gain",
    },
  ];

  const handleKnowMore = (title) => {
    alert(`Loading details for: ${title}`);
  };

  return (
    <div className="about-container" id="about">
      <h2 className="about-title">Premium Auto Spares & Parts</h2>
      
      <div className="grid-container">
        {items.map((item) => (
          <div  className="card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-item-title">{item.title}</h3>
              <p className="card-specs">{item.specs}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About; 
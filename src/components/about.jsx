import "./about.css";

function About() {
  // Array containing data for the 6 auto spare items
  const items = [
    {
      id: 1,
      title: "Performance Engine Oils",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZXBKlrc1PIEaz3rRyGGRY1BbClj4tghaKA&s",
      specs: "High-Heat Resistance | Fuel Efficency | Better Engine Life",
    },
    {
      id: 2,
      title: "Ceramic Brake Pads",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-LIROmxs5_U4WNQHRhqHQVgh2p1Fc45WvQ&s",
      specs: " Excellent for everyday commutes and consistent brakin |Generate fine, light-colored dust that does not stick to your rims.| Powerfull Brakeing",
    },
    {
      id: 3,
      title: "Head Lamps",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79_tna7Iy4CaEgFVTvBjFPRemc5dIVMU_mw&s",
      specs: " Ranges from \(30\text{W}\) up to \(150+\text{W}\) per bulb. Higher wattage requires advanced heat sinks or cooling fans."
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
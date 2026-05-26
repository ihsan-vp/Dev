import "./home.css";
import logo from "../assets/Images/logo.png"
function Home() {
  return (
    <div className="home">


      <div className="logo-section">
<img src={logo} alt="logo" className="logo" />

      <h1 className="heading">ACCESSORIES</h1>

</div>
    <nav className="navbar">

      <div className="nav-links">

        <a href="#">Home</a>
        <a href="">About us</a>
        <a href="">Services</a>
        <a href="">Contact us</a>
         
      </div>

    </nav>

    </div>
    
  );
}

export default Home;
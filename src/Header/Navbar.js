import "./Navbar.css";
import NotionalLogo  from "../media/Logo.png";



const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={NotionalLogo} alt='Logo'/>
      </div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>About Us</li>
          <li>Delegate</li>
          <li>Projects</li>
          <li>Infrastructure</li>
          <li>Team</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

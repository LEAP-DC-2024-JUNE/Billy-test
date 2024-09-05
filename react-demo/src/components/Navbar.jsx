import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black">
        <Link to={"/"}>Home</Link>
      </div>
      <div>
        <Link to={"/contact-page"}>Contact</Link>
      </div>
      <div>
        <Link to={"/about"}>About</Link>
      </div>
    </div>
  );
};

export default Navbar;

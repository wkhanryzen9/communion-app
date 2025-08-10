import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#ddd" }}>
      <h2>Communion App</h2>
      <div>
        <Link to="/">Home</Link> | 
        <Link to="/events"> Events</Link> | 
        <Link to="/about"> About</Link>
      </div>
    </nav>
  );
};

export default Header;

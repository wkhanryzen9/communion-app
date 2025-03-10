import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <section style={{ textAlign: "center", padding: "50px" }}>
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Connecting people of all faiths through events and community support.</p>
        <Link to="/events">
          <button>Explore Events</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;

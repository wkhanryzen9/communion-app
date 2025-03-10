import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <section style={{height: '90vh'}} className="w-full flex justify-center items-center gap-2 flex-col">
        <h1 className="text-4xl">Connecting People Across Faiths & Interests</h1>
        <p className="text-xl">Connecting people of all faiths through events and community support.</p>
        <Link to="/events">
          <button className="text-lg text-white font-semibold px-5 py-2 bg-emerald-700 rounded mt-4">Explore Events</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;


import VideoBanner from "./components/VideoBanner";
import Features from "./components/Features/Features";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
        <VideoBanner />
      {/* Features Section */}
      <Features />
    </div>
  );
}


export default Home;
import HeroSection from "./components/HeroSection/HeroSection";
import Summary from "./components/Summary/Summary";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <HeroSection />
        <Summary />
      </div>
    </main>
  );
};

export default App;
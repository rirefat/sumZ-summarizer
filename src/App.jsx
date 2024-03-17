import HeroSection from "./components/HeroSection";
import Summary from "./components/Summary";
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

        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default App;
// ButtonGradient => is an svg that give you a gradient effect to the buttons
import ButtonGradient from "./assets/svg/ButtonGradient";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collarboration from "./components/Collarboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] overflow-hidden lg:pt-[5.75rem]">
        <Header />
        <Hero />
        <Benefits />
        <Collarboration />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;

/*
    Some Notes:
            The folder .vscode inside of it file called setting.json
              this file is for make the code is always clean && readable
                the configuration in this file is custom and you make
                 any config you want it

                 - <></> is called react fragment

*/

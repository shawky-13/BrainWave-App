// import ref hook from react
import { useRef } from "react";
// import custom component section
import Section from "./Section";
// import curve image
import { curve, heroBackground, robot } from "../assets";
// import button component
import Button from "./Button";
// import some components from react-just-parallax library
import { ScrollParallax } from "react-just-parallax";
// import some components fromm design folder
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import heroIcons from constants folder
import { heroIcons } from "../constants";
// import Generating component
import Generating from "./Generating";
// import Notification component
import Notification from "./Notification";
// import companyLogs component
import CompanyLogs from "./CompanyLogs";

/*
        //react-just-parallax
            Definition: react-just-parallax is an open-source library
             designed for creating parallax effects in React applications.
              It allows developers to implement both mouse and scroll-based
              parallax effects easily.

            Purpose: The library is aimed at creative
            developers looking to enhance user engagement
             and visual appeal in their web projects through
             dynamic scrolling effects.

             The library provides two main components:
              MouseParallax and ScrollParallax

*/

const Hero = () => {
  const parallRef = useRef(null);

  return (
    <Section
      className="pt-[6rem]"
      crosses //
      crossesOffset="lg:translate-y-[0rem]" // crossesOffset => for the vertical height of the horizontal line in the top of the section
      customPadding
      id="hero"
    >
      <div className=" container relative" ref={parallRef}>
        {/* The content that before the robot image */}
        <div className="max-w-[62rem] mx-auto text-center relative z-1">
          <h1 className="h1 w-[85%] mx-auto">
            Explore the Possibilities of AI Chatting with
            <div className="inline-block ml-0.5 w-[200px] mx-auto md:w-[250px] lg:w-[300px] lg:ml-2 ">
              <span>Brainwave</span>
              <img src={curve} alt="curve" className="w-[100%] mx-auto" />
            </div>
          </h1>
          <p className="body-1 max-w-3xl mx-auto text-n-2 mt-5 lg:mb-7">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button
            className="capitalize mx-auto mt-10 pr-3 !text-black hover:!text-color-1"
            href="/pricing"
            white
          >
            get started
          </Button>
        </div>
        {/* The Robot image  */}
        <div className="mt-14 max-w-[55rem]  relative mx-auto lg:max-w-[65rem] lg:mt-20">
          <div className="rounded-[1rem] bg-conic-gradient w-full relative z-2 p-0.5">
            <div className="w-full relative rounded-[1rem] h-[30rem] overflow-hidden">
              <div className="rounded-t-[1rem] h-[1.5rem] w-full bg-n-10 z-1" />
              <div className="overflow-hidden">
                <img
                  src={robot}
                  alt="AI"
                  className="w-full z-0 -translate-y-[6rem] md:-translate-y-[15rem] lg:-translate-y-[22rem]"
                />
              </div>
              {/* Generating is a component in the bottom of the robot image that contains spinner loading image & some text */}
              <Generating className="absolute left-1/2 -translate-x-1/2 top-[85%] w-[80%] md:w-[55%] lg:w-[45%]" />
            </div>
            {/* ScrollParallax is a component from react-just-parallax */}
            <ScrollParallax isAbsolutelyPositioned>
              <ul className="hidden absolute top-[60%] w-[18rem] border backdrop-blur border-n-3/35 -left-20 bg-n-10/50 p-6 rounded-lg justify-between items-center xl:flex">
                {heroIcons.map((icon, index) => (
                  <li key={index} className="mr-5">
                    <img src={icon} alt="icon" className="w-[25px] h-[25px] " />
                  </li>
                ))}
              </ul>
            </ScrollParallax>
            {/* another ScrollParallax component from react-just-parallax */}
            <ScrollParallax isAbsolutelyPositioned>
              <Notification className="absolute bottom-52 hidden xl:flex -right-20" />
            </ScrollParallax>
            {/* Gradient component for the boxes under the robot image */}
            <Gradient />
          </div>
          <div className=" absolute top-0 -translate-y-[15rem] -translate-x-1/2 left-1/2 w-[145%] h-[15rem] md:-translate-y-[30rem] lg:-translate-y-[39rem]">
            <img src={heroBackground} alt="herobackground" className="w-full" />
          </div>
          {/* BackgroundCircles is a component for the circles and plantes shapes */}
          <BackgroundCircles />
        </div>
        {/* company logos component */}
        <CompanyLogs className="hidden relative lg:flex" />
      </div>
      {/* BottomLine is a component that make a horizontal line below the section */}
      <BottomLine />
    </Section>
  );
};

export default Hero;

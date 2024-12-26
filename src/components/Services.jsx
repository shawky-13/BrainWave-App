import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container mx-auto">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />
        <div className="z-1 relative flex flex-col justify-between items-center mt-10 lg:mt-20 lg:flex-row">
          <div className=" relative w-full border border-n-4 rounded-xl min-h-[38rem] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[40rem] md:w-[45rem] md:left-1/4 lg:w-fit ">
              <img src={service1} alt="AI_Robot" className="w-full h-full" />
            </div>
            <div className=" absolute z-2 top-1/2 -right-10 -translate-y-1/2 flex flex-col justify-between items-start md:right-0">
              <h4 className="body-1 text-2xl mb-2">Smartest AI</h4>
              <p className="body-2 text-n-4 text-sm mb-10 max-w-[20rem]">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul>
                {brainwaveServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center border-t border-t-n-4/30 pt-4 mb-5"
                  >
                    <img src={check} alt="check-icon" />
                    <span className="ml-3">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute bottom-10 left-1/2 -translate-x-1/2 border border-n-4/20 w-[90%] md:w-[70%] lg:w-[55%] " />
          </div>
        </div>
        <div className="relative z-1 grid gap-5 mt-10 lg:grid-cols-2">
          <div className="relative border border-n-4 rounded-xl min-h-[38rem] overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={service2}
                alt="service-2"
                width={630}
                height={750}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute z-5 bottom-10 left-1/2 -translate-x-1/2 w-[90%]">
              <h4 className="body-1 text-2xl mb-2 capitalize">photo editing</h4>
              <p className="body-2 text-n-3/70 text-sm mb-10 max-w-[20rem] capitalize">
                automatically enhance your photos using our AI app's photo
                editing feature. try it now!
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-4 bg-n-8/60" />
            <PhotoChatMessage />
          </div>
          <div className="relative flex flex-col justify-between bg-n-7 rounded-2xl p-5">
            <div>
              <h4 className="body-1 text-2xl mb-2 capitalize">
                video generation
              </h4>
              <p className="body-2 text-n-3/70 text-sm mb-10 max-w-[20rem] capitalize">
                the world’s most powerful AI photo and video art generation
                engine. what will you create?
              </p>
              <ul className="w-full flex items-center justify-between">
                {brainwaveServicesIcons.map((icon, index) => (
                  <li
                    className={` w-[3rem] h-[3rem] p-0.25  rounded-xl ${index === 2 ? "bg-conic-gradient  animate-bounce" : "bg-n-8"} `}
                    key={index}
                  >
                    <div
                      className={`${index === 2 ? "bg-n-8" : ""} rounded-xl w-full h-full flex justify-center items-center`}
                    >
                      <img src={icon} alt="service_icon" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 relative">
              <div className="bg-n-8 rounded-2xl overflow-hidden">
                <img
                  src={service3}
                  alt="service_3"
                  className="object-cover w-full h-full scale-110"
                />
              </div>
              <VideoChatMessage />
              <VideoBar />
            </div>
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
};

export default Services;

/*
        Some Notes :
                     - inset-0 => This utility is particularly useful for absolutely positioned elements, allowing you to stretch them to fill the entire area of their parent container
                     - object-cover => When you want an image to fill a specific area without distorting its aspect ratio, you can use object-cover. This is particularly useful for responsive designs where the image needs to adapt to different screen sizes.



*/

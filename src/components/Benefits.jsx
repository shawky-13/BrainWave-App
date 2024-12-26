// import the Section reuseable component
import Section from "./Section";
// import benefits from constants folder
import { benefits } from "../constants";
// import Heading component
import Heading from "./Heading";
// import Arrow component from assests folder
import Arrow from "../assets/svg/Arrow";
// import GradientLight component from design folder
import { GradientLight } from "./design/Benefits";
// import clipPath component from assets folder
import ClipPath from "../assets/svg/ClipPath";
import { BottomLine } from "./design/Hero";

const Benefits = () => {
  return (
    <Section id="features" className={"relative"}>
      <div className="relative container mt-20 lg:mt-0">
        <Heading
          className="mb-10 max-w-[40rem] mx-auto text-center"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="flex relative flex-wrap justify-start items-center">
          <div className="z-10 flex flex-col justify-start items-start relative flex-1 gap-10 md:flex-wrap md:flex-row">
            {benefits.map((box) => (
              <div
                className={`relative flex flex-col p-0.5 justify-between max-w-[24rem] sm:mx-auto md:mx-0 `}
                key={box.id}
              >
                <div className="flex p-[2.5rem] flex-col justify-between items-start z-2 pointer-events-none min-h-[22rem]">
                  <h5 className="h5 mb-5">{box.title}</h5>
                  <p className="text-n-3/45 body-2">{box.text}</p>
                  <div className="flex w-full flex-row justify-between mt-10 items-center">
                    <img src={box.iconUrl} alt="icon" />
                    <div className="flex items-center">
                      <span className="uppercase mr-1 text-xs font-code tracking-wider">
                        explore more
                      </span>
                      <Arrow />
                    </div>
                  </div>
                </div>

                {box.light && <GradientLight />}

                <div
                  className="bg-n-8  absolute inset-0.5"
                  style={{
                    clipPath: "url(#benefits)",
                  }}
                >
                  <div className=" absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {box.imageUrl && (
                      <img
                        src={box.imageUrl}
                        alt="image"
                        className="w-full h-full"
                      />
                    )}
                  </div>
                </div>
                <ClipPath />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;

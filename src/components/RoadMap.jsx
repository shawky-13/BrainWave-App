import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import TagLine from "./Tagline";
import { Gradient } from "./design/Roadmap";
import Button from "./Button";

const RoadMap = () => {
  return (
    <Section id="roadmap">
      <div className=" relative container">
        <Heading tag={"Ready to get started"} title={"What we’re working on"} />
        <div className=" relative mt-[5rem] grid gap-5 md:grid-cols-2 md:pb-20">
          {roadmap.map((item) => (
            <div
              key={item.id}
              className={`${item.colorful ? "bg-conic-gradient" : "bg-n-6"} rounded-[2rem] p-0.25 even:md:translate-y-[7rem]`}
            >
              <div className=" flex flex-col min-h-[30rem] relative overflow-hidden bg-n-8 rounded-[2rem] py-10 p-5 !md:py-2 xl:p-15">
                <div className=" absolute top-0 left-0 max-w-full">
                  <img
                    src={grid}
                    alt="Grid"
                    className="w-full h-full rounded-2xl"
                    width={550}
                    height={550}
                  />
                </div>
                <div className="flex flex-row justify-between items-center mb-5">
                  <TagLine className={"w-[8.5rem]"}>December 2024</TagLine>
                  <div className="w-[7.5rem] p-1 bg-white rounded-md flex justify-center items-center">
                    <img
                      src={item.status === "done" ? check2 : loading1}
                      alt={item.title}
                      className={`mr-1 ${item.status === "done" ? "" : "animate-spin"}`}
                    />
                    <span className="text-n-7 text-xs font-code uppercase">
                      {item.status === "done" ? "done" : "in progress"}
                    </span>
                  </div>
                </div>
                <div className="w-full mb-15">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full"
                  />
                </div>
                <div>
                  <h4 className="h4 mb-3"> {item.title} </h4>
                  <p className=" body-2 text-n-4 text-sm"> {item.text} </p>
                </div>
              </div>
            </div>
          ))}
          <Gradient />
        </div>
        <div className="mx-auto mt-10 w-fit md:mt-28">
          <Button>our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default RoadMap;

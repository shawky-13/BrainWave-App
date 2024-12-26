// import Section component
import Section from "./Section";
// import CollarbContent array from constants folder
import { collabApps, collabContent, collabText } from "../constants";
import { brainwaveSymbol, check } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
const Collarboration = () => {
  return (
    <Section crosses>
      <div className=" relative container">
        <div className="relative flex justify-between flex-col gap-10 items-center lg:flex-row">
          <div className="flex flex-col items-start">
            <h2 className=" h2 mb-10 max-w-[30rem] mx-auto md:mx-0">
              AI Chat App for seamless collaboration
            </h2>
            <ul className="flex flex-col max-w-[35rem]">
              {collabContent.map((content) => (
                <div key={content.id}>
                  <li className="mb-4 flex ">
                    <img src={check} alt="check" />
                    <span className="body-2 ml-5">{content.title}</span>
                  </li>
                  {content.text && (
                    <p className="body-1 text-n-3/40 mb-5 text-sm max-w-[20rem]">
                      {content.text}
                    </p>
                  )}
                </div>
              ))}
            </ul>
            <Button className={"mt-10"}>try it now</Button>
          </div>
          <div className="flex flex-col justify-end items-end">
            <p className="body-1 text-n-3/50 mb-20 text-sm mx-auto max-w-[20rem] lg:mb-15">
              {collabText}
            </p>
            <div className="relative w-[20rem] h-[20rem] mx-auto lg:mx-52">
              <div className="w-full h-full border border-n-4/45 rounded-full p-10">
                <div className=" relative w-full h-full border border-n-4/45 rounded-full">
                  <div className="w-[5rem] h-[5rem] p-0.5 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-conic-gradient transition-all animate-pulse">
                    <div className=" w-full h-full bg-n-8 flex justify-center items-center rounded-full">
                      <img src={brainwaveSymbol} alt="brainwave" />
                    </div>
                  </div>
                </div>
                {
                  <ul>
                    {collabApps.map((app, index) => (
                      <li
                        key={app.id}
                        className={` absolute -top-7 h-[58%] left-1/2 -translate-x-1/2 origin-bottom rotate-${index * 45} `}
                      >
                        <div
                          className={`p-1 backdrop-blur bg-n-6/25 border border-n-4 -rotate-${index * 45} rounded-xl w-[3rem] h-[3rem] flex items-center justify-center`}
                        >
                          <img
                            src={app.icon}
                            alt={app.title}
                            width={app.width}
                            height={app.height}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                }
                <LeftCurve />
                <RightCurve />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collarboration;

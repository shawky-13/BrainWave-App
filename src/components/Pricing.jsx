import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
const Pricing = () => {
  return (
    <Section id="pricing">
      <div className=" container relative">
        <div className="relative  hidden justify-center mb-[5rem] overflow-hidden lg:flex">
          <div className=" z-1 w-[6rem] h-auto mx-auto pb-52">
            <img
              src={smallSphere}
              alt="smallShere"
              className="w-full h-full translate-y-20"
            />
          </div>
          <div className="w-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <img
              src={stars}
              alt="stars"
              className="w-[500%] h-[25rem] animate-spin-slowly rounded-full "
            />
            <img
              src={stars}
              alt="stars"
              className="w-[500%] h-[25rem] animate-spin-slowly rounded-full"
            />
            <img
              src={stars}
              alt="stars"
              className="w-[500%] h-[25rem] animate-spin-slowly rounded-full"
            />
          </div>
        </div>
        <div className=" relative mt-0 lg:mt-20">
          <Heading
            tag={"Get started with Brainwave"}
            title={"Pay once, use forever"}
          />
          <div className=" relative mt-20">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>
          <div className="flex w-fit mx-auto mt-10">
            <a
              href="/pricing"
              className=" uppercase font-code tracking-wide text-sm text-n-4 border-b border-n-4/35"
            >
              see the full details
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;

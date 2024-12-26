// import SectionSvg from assest folder
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  id,
  className,
  children,
  crosses,
  crossesOffset,
  customPadding,
}) => {
  return (
    <div
      id={id}
      className={`relative ${className || ""} ${customPadding || "py-10 lg:py-16 xl:py-20"} ${crosses ? "lg:py-32 xl:py-40" : ""} `}
    >
      {/* childern for the content of the custom component */}
      {children}
      {/* create the lines on the left & right of the section */}
      <div className="hidden absolute bg-stroke-1 pointer-events-none left-5 h-full w-0.25 top-0 md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute bg-stroke-1 pointer-events-none right-5 h-full w-0.25 top-0 md:block lg:right-7.5 xl:right-10" />

      {/* check if the crosses founded or not */}
      {crosses && (
        <>
          <div
            className={` ${crossesOffset && crossesOffset} bg-stroke-1 h-0.25  absolute left-5 rigth-5 hidden top-0 pointer-events-none lg:block lg:left-10 lg:right-10`}
          />
          {/* note : in className above ${crossesOffset && crossesOffset} => that means if crossesOffset founded put it into the className */}
          {/* SectionSvy => is a component for the + svy in right & left of the section */}
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;

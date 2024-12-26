import Brackets from "../assets/svg/Brackets";
const TagLine = ({ children, className }) => {
  return (
    <div
      className={`${className || ""} uppercase font-code flex justify-between items-center text-sm text-n-4`}
    >
      {Brackets("left")}
      {children}
      {Brackets("right")}
    </div>
  );
};

export default TagLine;

// import loading image from assests folder
import { loading } from "../assets";
const Generating = ({ className }) => {
  return (
    <div
      className={`${className || ""} flex justify-start items-center capitalize px-10 py-3 bg-n-8/70 rounded-[2rem] mx-auto`}
    >
      <img
        src={loading}
        alt="loading"
        className="w-[1.5rem] h-[1.5rem] mr-4 animate-spin"
      />
      ai is Generating
    </div>
  );
};

export default Generating;

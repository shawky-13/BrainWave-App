import { companyLogos } from "../constants";

const CompanyLogs = ({ className }) => {
  return (
    <div
      className={` ${className || ""} flex-col justify-between item-center w-[90%] mx-auto pt-20`}
    >
      <h6 className=" uppercase text-center text-sm text-n-4 mb-15">
        Helping people create beautiful content at
      </h6>
      <div className="flex justify-between items-center">
        {companyLogos.map((logo, index) => (
          <img src={logo} alt="logo" key={index} />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogs;

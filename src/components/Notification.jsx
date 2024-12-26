// import notification image from assets folder
import { notification1 } from "../assets";
// import notification clients from constants folder
import { notificationImages } from "../constants";

const Noticifaction = ({ className }) => {
  return (
    <div
      className={`${className || ""} bg-n-3/10 w-[18rem] justify-between items-center rounded-2xl backdrop-blur border border-n-4/35 p-5 `}
    >
      <img
        src={notification1}
        alt="notification_1"
        width={60}
        height={60}
        className="mr-7 rounded-xl"
      />
      <div className="flex flex-col justify-start items-start flex-1">
        <h4 className="capitalize mb-2">code generation</h4>
        <div className="flex justify-between items-center w-full">
          <div className="flex">
            {notificationImages.map((img, index) => (
              <img
                src={img}
                alt="nofity_img"
                key={index}
                width={20}
                height={20}
                className=" rounded-full mr-2"
              />
            ))}
          </div>
          <span className="text-n-4">1m ago</span>
        </div>
      </div>
    </div>
  );
};

export default Noticifaction;

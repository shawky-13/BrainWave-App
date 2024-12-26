import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";
const PricingList = () => {
  return (
    <div className="flex flex-col justify-between gap-4 lg:flex-row">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="relative border p-5 border-n-4/30 rounded-3xl w-full min-h-[35rem] mx-auto [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 lg:w-[30rem] lg:h-[38.5rem] lg:even:h-[40.5rem] lg:even:-translate-y-4"
        >
          <h4 className={`h4 mb-5`}>{item.title}</h4>

          <p className="body-2 text-n-4 text-sm mb-20">{item.description}</p>
          {item.price ? (
            <div className="flex items-center">
              <span className="font-bold text-3xl">$ </span>
              <span className="font-bold text-[5rem]">{item.price}</span>
            </div>
          ) : (
            <div className="h-5"></div>
          )}

          <Button className={"mt-8 w-full"} white={item.price}>
            {item.price ? "Get Started" : "Contact Us"}
          </Button>

          <ul className="mt-10">
            {item.features.map((item, index) => (
              <li
                key={index}
                className="flex items-center border-t border-n-4/30 pt-4 text-sm mb-5"
              >
                <img src={check} alt="check" className="mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;

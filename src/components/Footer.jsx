import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className={"!py-15"}>
      <div className=" relative container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-n-4 text-sm mb-10 md:mb-0">
            ©{new Date().getFullYear()}. All rights reserved.
          </div>
          <ul className="flex flex-row justify-between items-center">
            {socials.map((icon, index) => (
              <a
                href={icon.url}
                target="_blank"
                key={icon.id}
                className="bg-n-5/20 flex justify-center items-center p-3 rounded-full mr-3 transition-colors hover:bg-n-5/65"
              >
                <img src={icon.iconUrl} alt={icon.title} />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;

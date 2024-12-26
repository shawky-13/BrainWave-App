import React, { useState } from "react";
// import scroll-lock to stop scrolling when the menu is open
import { disablePageScroll, enablePageScroll } from "scroll-lock";
// import brainwave image
import { brainwave } from "../assets";
// import links of the nav
import { navigation } from "../constants";
// importing useLocation hook from react-router-dom
import { useLocation } from "react-router-dom";
// import button component
import Button from "./Button";
// import menu svg
import MenuSvg from "../assets/svg/MenuSvg";
// import HamburgerMenu from Design folder
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathName = useLocation();
  // create a state hook to open and close the menu
  const [isOpen, setIsOpen] = useState(false);
  // create toggle for open and close menu in moblie
  const toggle = () => {
    if (isOpen) {
      setIsOpen((prev) => !prev);
      enablePageScroll();
    } else {
      setIsOpen((prev) => !prev);
      disablePageScroll();
    }
  };
  // handle link of the nav
  const handleLink = () => {
    // if the link is clicked, close the menu
    if (!isOpen) return;

    enablePageScroll();
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="fixed w-full top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex relative justify-between items-center px-5 py-3 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* creating image logo of brainwave */}
        <a href="#hero" className="w-[12rem] block lg:mr-8">
          <img src={brainwave} alt="brainwave" className="w-[190px] h-[40px]" />
        </a>
        {/* creating nav of links */}
        <nav
          className={`justify-center items-center ${isOpen ? "flex" : "hidden"}  lg:flex z-2`}
        >
          <div
            className={` ${isOpen ? "absolute top-[104%] left-0 w-full flex-col !justify-start pt-14 h-lvh bg-n-8" : ""} flex flex-row justify-center items-center m-auto`}
          >
            {navigation.map((link) => (
              <a
                onClick={handleLink}
                href={link.url}
                key={link.id}
                className={`w-[7rem] ${link.url === pathName.hash ? "lg:text-n-1" : "lg:text-n-1/50"}  ${isOpen ? "text-center w-fit" : ""} ${link.onlyMobile ? "lg:hidden block mx-2 px-1 py-6 lg:font-semibold lg:text-sm" : "block mx-2 px-1 py-6 lg:font-semibold lg:text-sm"} text-xl text-n-1 transition-colors uppercase font-code hover:text-color-1`}
              >
                {link.title}
              </a>
            ))}
            <HamburgerMenu />
          </div>
        </nav>
        <div className={`hidden items-center  lg:flex`}>
          <a
            href="#signup"
            className="capitalize button hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            new account
          </a>
          <Button className="hidden ml-10 lg:flex" href="#login">
            sign in
          </Button>
        </div>
        {/* end of links */}

        {/* for mobile and small screens  */}
        {/* MenuSvg component */}
        <Button className="lg:hidden" onClick={toggle}>
          <MenuSvg openNavigation={isOpen} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

/*
       Notes:
                            In the header component
                              - in classese of the parent div (backdrop-blur-sm)
                                  this class to make the header have a backdrop like glass
                              -




*/

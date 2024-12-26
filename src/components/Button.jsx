// import ButtonSvg from assets folder
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ href, className, children, onClick, white, px }) => {
  const classes = `relative text-sm font-code p-2 inline-flex justify-start items-center
  transition-all  text-black hover:text-color-1 h-11 ${px || "px-2"}
   ${white ? "text-n-8" : "text-n-1"} ${className || ""} active:scale-90 `;
  const spanClasses = `relative p-3 z-10 font-bold uppercase`;
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}> {children} </span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes} target="_blank">
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;

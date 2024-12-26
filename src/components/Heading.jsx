import TagLine from "./TagLine";
const Heading = ({ className, title, text, tag }) => {
  return (
    <div className="w-fit mx-auto text-center">
      {tag && <TagLine className="max-w-[18rem] mx-auto">{tag}</TagLine>}
      <h2 className={`${className || ""} h2 mt-5 `}>{title}</h2>
      {text && <p className="body-2 text-n-4 text-sm mt-5">{text}</p>}
    </div>
  );
};

export default Heading;

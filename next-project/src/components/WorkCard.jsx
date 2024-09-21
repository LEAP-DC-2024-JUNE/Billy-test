import Image from "next/image";
import { Button } from "./Experience";

export const WorkCard = (props) => {
  const { title, description, imgSrc, reverse, buttons } = props;
  if (reverse == true) {
    return (
      <div className="w-[500px] h-[500px] flex items-center flex-row-reverse">
        {title}
        {buttons.map((button) => {
          return <Button button={button} />;
        })}
      </div>
    );
  }

  return (
    <div className="w-[500px] h-[500px] flex items-center">
      <Image width={200} height={200} src={imgSrc} />
      <div>
        <p className=" font-bold">{title}</p>
        <p>{description}</p>
        <button></button>
      </div>
    </div>
  );
};

import Image from "next/image";

export const WorkCard = (props) => {
  const { title, description, imgSrc, reverse } = props;
  if (reverse == true) {
    return (
      <div className="w-[500px] h-[500px] flex items-center flex-row-reverse">
        <Image width={200} height={200} src={imgSrc} />
        <div>
          <p className="font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-[500px] h-[500px] flex items-center">
      <Image width={200} height={200} src={imgSrc} />
      <div>
        <p className=" font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

import Image from "next/image";
import Pic from "../../public/Pic.png";
import Pic1 from "../../public/Pic1.png";
import Pic2 from "../../public/snapscout.png";

export const ImageContainer = () => {
  const array = [Pic, Pic1, Pic2];
  const result = array.map((element) => {
    return <Image src={element} />;
  });

  return <div className="">{result}</div>;
};

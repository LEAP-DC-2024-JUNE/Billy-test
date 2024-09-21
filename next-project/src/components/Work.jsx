import { WorkCard } from "./WorkCard";
import UbCab from "../../public/Pic.png";
import Mentorhub from "../../public/Pic1.png";
import iToim from "../../public/snapscout.png";
import { Button } from "./Experience";

export const Work = () => {
  const jobDescriptions = ["hi", 2, 3, 4];
  return (
    <div className="flex flex-col justify-center items-center">
      <Button button={"Work"} />
      {works.map((work, index) => {
        return (
          <WorkCard
            imgSrc={work.imgSrc}
            title={work.title}
            description={work.description}
            buttons={work.buttons}
          />
        );
      })}

      {/* <ol> */}
    </div>
  );
};

import { WorkCard } from "./WorkCard";
import UbCab from "../../public/Pic.png";
import Mentorhub from "../../public/Pic1.png";
import iToim from "../../public/snapscout.png";

export const Work = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <WorkCard
        imgSrc={UbCab}
        title="UBCab"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
      />

      <WorkCard
        title="Mentorhub"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
        imgSrc={Mentorhub}
        reverse={true}
      />
      <WorkCard
        imgSrc={iToim}
        title="iToim"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
      />
    </div>
  );
};

import { ImageContainer } from "./ImageContainer";
import { WorkCard } from "./WorkCard";

export const Chip = (props) => {
  const { description, title, color, isVisible } = props;

  if (isVisible === true) {
    return <p className={`bg-${color}-500`}>{title}</p>;
  }
  return <WorkCard buttons={["reactjs", "nextjs"]} />;
};

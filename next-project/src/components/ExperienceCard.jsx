const ExperienceCard = ({ title, descriptions }) => {
  return (
    <div>
      <p>{title}</p>
      {descriptions.map((description) => {
        return <li>{description}</li>;
      })}
    </div>
  );
};
export default ExperienceCard;

export const Chip = (props) => {
  const { description, title, color, isVisible } = props;

  if (isVisible === true) {
    return <p className={`bg-${color}-500`}>{title}</p>;
  }
  return (
    <div className="flex flex-row-reverse flex-s">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

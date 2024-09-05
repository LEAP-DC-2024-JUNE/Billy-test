export const ImageCategory = () => {
  return (
    <div>
      {categoryName.map((name) => {
        return (
          <div>
            <button className=" bg-black text-yellow-50">{name}</button>
          </div>
        );
      })}
    </div>
  );
};

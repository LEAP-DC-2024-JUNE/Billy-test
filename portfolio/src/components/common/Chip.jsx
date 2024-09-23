export const Chip = ({ title }) => {
  return (
    <div className="h-7 px-5 py-1 bg-gray-200 rounded-xl justify-center items-center inline-flex">
      <div className="text-gray-600 text-sm font-medium leading-tight">
        {title}
      </div>
    </div>
  );
};

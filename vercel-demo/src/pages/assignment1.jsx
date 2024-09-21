import { useState } from "react";

const Assignment1 = () => {
  const [isOdd, setIsOdd] = useState(false);
  const array = [1, 2, 3, 4, 5, 6, 8];
  const evenNumberArray = array.filter((number) => {
    return isOdd == true ? number % 2 == 1 : number % 2 == 0;
  });

  const handleOdd = () => {
    setIsOdd(true);
  };

  const handleEven = () => {
    setIsOdd(false);
  };

  return (
    <div>
      <div>Filter Even Numbers</div>
      <div>
        <button className="border-2 bg-red-50" onClick={handleOdd}>
          Sondgoi
        </button>
        <button className="border-2 bg-yellow-50" onClick={handleEven}>
          Tegsh
        </button>
      </div>
      {evenNumberArray.map((number) => {
        return <p>{number}</p>;
      })}
    </div>
  );
};

export default Assignment1;

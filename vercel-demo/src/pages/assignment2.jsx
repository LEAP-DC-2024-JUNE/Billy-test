import { useState } from "react";

const Assignment2 = () => {
  const [value, setValue] = useState(0);
  const array = ["apple", "banana", "kiwi", "pear"];
  const filteredArray = array.filter((element) => {
    return element.length > value;
  });
  const handleChangeValue = (param1) => {
    setValue(param1);
  };
  return (
    <div>
      <div>Filter Strings by Length</div>
      <button
        className="border-2 bg-red-50"
        onClick={() => handleChangeValue(4)}
      >
        4
      </button>
      <button
        className="border-2 bg-yellow-50"
        onClick={() => handleChangeValue(2)}
      >
        2
      </button>
      <button
        className="border-2 bg-yellow-50"
        onClick={() => handleChangeValue(5)}
      >
        5
      </button>

      {filteredArray.map((element) => {
        return <p>{element}</p>;
      })}
    </div>
  );
};

export default Assignment2;

import { useState } from "react";

export default function Home() {
  const [age, setAge] = useState(18);
  const array = [
    {
      name: "Dul",
      age: 18,
    },
    {
      name: "Alungoo",
      age: 17,
    },
    {
      name: "Sumiyaa",
      age: 19,
    },
  ];

  const filteredArray = array.filter((element) => {
    return element.age >= age;
  });

  const handleClick = () => {
    setAge(0);
  };
  const handleClickAdult = () => {
    setAge(18);
  };
  return (
    // <div>
    //   <h1>Nasand hursen humuus</h1>
    //   <button className="bg-red-400" onClick={handleClickAdult}>
    //     18 aas deesh nasniih
    //   </button>
    //   <button className="bg-yellow-500" onClick={handleClick}>
    //     buh nasniihan
    //   </button>
    //   <div>
    //     {filteredArray.map((person) => {
    //       return (
    //         <div>
    //           <p>{person.name}</p>
    //           <span>{person.age}</span>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="flex justify-center items-center">
      <input
        className="border-2"
        type="number"
        onChange={(event) => console.log(event.target.value)}
      ></input>
    </div>
  );
}

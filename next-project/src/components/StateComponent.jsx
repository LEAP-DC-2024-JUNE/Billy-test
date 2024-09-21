import { useState } from "react";

export const StateComponent = () => {
  const [name, setName] = useState("Duluu");
  const handleClick = () => {
    setName("Billy");
  };
  console.log("StateComponent rendered");
  return (
    <div>
      <div>Hello {name}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleLastName = (param1) => {
    setLastName(param1);
  };
  const handleFirstName = (param1) => {
    setFirstName(param1);
  };
  const handleEmail = (mail) => {
    setEmail(mail);
  };

  const submitButton = () => {
    console.log(firstName, lastName, email);
  };

  return (
    <div>
      <input
        className="border-2"
        type="text"
        placeholder="LastName"
        onChange={(event) => handleLastName(event.target.value)}
      />
      <input
        className="border-2"
        type="text"
        placeholder="FirstName"
        onChange={(event) => handleFirstName(event.target.value)}
      />
      <input
        className="border-2"
        type="email"
        placeholder="email"
        onChange={(event) => handleEmail(event.target.value)}
      />
      <button onClick={submitButton}>Sign in</button>
    </div>
  );
};

export default Form;

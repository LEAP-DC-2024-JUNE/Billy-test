import { useState } from "react";

const Assignment5 = () => {
  const [isPassed, setIsPassed] = useState(true);
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];
  const passingStudents = students.filter((student) => {
    return isPassed ? student.grade >= 60 : student.grade < 60;
  });

  const handlePass = (param1) => {
    setIsPassed(param1);
  };
  return (
    <div>
      <div>
        <button className="bg-red-50 border-2" onClick={() => handlePass(true)}>
          Pass hiisen
        </button>
        <button
          className="bg-red-500 border-2"
          onClick={() => handlePass(false)}
        >
          Unasan
        </button>
      </div>
      <div>
        {passingStudents.map((student) => {
          return <p>{student.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Assignment5;

import { useEffect, useState } from "react";

export const Form = () => {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(10);
  console.log("Before Useeffect");

  useEffect(() => {
    //Mounting
    console.log("First Useeffect");
  });
  useEffect(() => {
    //Once
    console.log("Second Useeffect");
  }, []);

  useEffect(() => {
    // updating
    // console.log("Inside Useeffect")
    console.log("Third Useeffect");
  }, [age, counter]);

  console.log("After Useeffect");
  return (
    <form>
      <h3>Counter: {counter}</h3>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add 1
      </button>
      {/* < input type="text"/> */}
    </form>
  );
};

// prettier
// eslint
// formatOnSave: true  ===> 1:03

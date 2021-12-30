import { useState } from "react";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    getData(text);
  };

  return (
    <>
      <input type="text" placeholder="Enter Todo" onChange={handleChange} />
      <button onClick={handleClick}>Add Todo</button>
    </>
  );
};

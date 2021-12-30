import { useState } from "react";
import { TodoInput } from "./Todoinput";
import { TodoItem } from "./Todoitem";

export const Todo = () => {
  const [list, setList] = useState([]);
  const handleClick = (data) => {
    console.log("Data in parent", data);
    setList([...list, data]);
  };
  return (
    <>
      <TodoInput getData={handleClick} />
      {list.map((e) => (
        <TodoItem title={e} />
      ))}
    </>
  );
};

import { useState } from "react";
import { TodoInput } from "./Todoinput";
import { TodoItem } from "./Todoitem";
import {nanoid} from "./nanoid"

export const Todo = () => {
  const [list, setList] = useState([]);
  const handleClick = (data) => {
    console.log("Data in parent", data);
    const payload = {
      title:data,
      status:false,
      id:nanoid(7)
    }
    setList([...list, payload]);
  };
  return (
    <>
      <TodoInput getData={handleClick} />
      {list.map((e) => (
        // <TodoItem key={e.id} title={e.title} status={e.status} />
        <TodoItem key={e.id} {...e} />
      ))}
      {/* {[1,2,3,4]}
      <TodoList list = {list}/> */}
    </>
  );
};

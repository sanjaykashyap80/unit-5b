import { useState, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/actions";

export const Todos = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          // setTodos()
          dispatch(addTodo(text));
        }}
      >
        Add Todo
      </button>
      {todos.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
};

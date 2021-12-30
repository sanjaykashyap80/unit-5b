import { useEffect, useState } from "react";

export const Todo = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    fetch("http://localhost:3001/todos")
      .then((d) => d.json())
      .then((res) => {
        // console.log(res)
        setTodo(res);
      });
  };

  const addTodo = () => {
    const payload = {
      title: text,
      status: false
    };
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    }).then(() => {
      getTodo();
      setText("");
    });
    // setTodos([...todos, text])
  };

  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />
      <button onClick={addTodo}>Add Todo</button>

      {/* {todos.map((e) => (
      <div>{e}</div>
    ))} */}
      {/* {[].map((e) => (
      <div>{e}</div>
    ))} */}
      {todo.map((e, i) => (
        <div key={i}>{e.title}</div>
      ))}
    </div>
  );
};

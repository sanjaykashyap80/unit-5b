import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getTodoError,
  getTodoLoading,
  getTodoSuccess
} from "../features/Todos/actions";

export const Todos = () => {
  const [text, setText] = useState("");
  const { loading, todos, error } = useSelector(
    (state) => ({
      loading: state.todosState.loading,
      todos: state.todosState.todos,
      error: state.todosState.error
    }),
    function (prev, curr) {
      if (prev.loading === curr.loading && prev.error === curr.error) {
        return true;
      }
      return false;
    }
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    try {
      dispatch(getTodoLoading());
      const data = await fetch("http://localhost:3004/todos").then((d) =>
        d.json()
      );
      dispatch(getTodoSuccess(data));
    } catch (err) {
      dispatch(getTodoError(err));
    }
  }

  const addTodo = () => {
    // setTodos()
    dispatch(addTodoLoading());
    fetch("http://localhost:3004/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: false, title: text })
    })
      .then((d) => d.json())
      .then((res) => {
        // success
        dispatch(addTodoSuccess());
        getTodos();
      })
      .catch((err) => {
        // error
        dispatch(addTodoError());
      });
    // dispatch(addTodo(text));
  };

  // console.log("Rendering");

  return loading ? (
    <div>Loading.....</div>
  ) : error ? (
    <div>Something went wrong!</div>
  ) : (
    <div>
      <input
        value={text}
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          // // setTodos()
          // dispatch(addTodoLoading())
          // fetch("http://localhost:3001/todos",{
          //   method:"POST",
          //   headers: {
          //     "Content-Type":"application/json"
          //   },
          //   body:JSON.stringify({status:false, title: text}),
          // }).then(d => d.json()).then(res => {
          //   // success
          //   dispatch(addTodoSuccess())
          // }).catch(err => {
          //    // error
          //    dispatch(addTodoError())
          // })
          // // dispatch(addTodo(text));
          addTodo();
        }}
      >
        Add Todo
      </button>
      {todos.map((e, i) => (
        <div key={i}>
          {e.title} - {e.status ? "Done" : "Not DOne"}
        </div>
      ))}
    </div>
  );
};

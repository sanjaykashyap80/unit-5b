import React from "react";
import "./styles.css";
// import {useSelector, useDispatch} from "react-redux"
import { addTodo } from "./store/actions";
import { Todos } from "./components/Todos";

export default function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  const counter = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {}}>ADD 1</button>
    </div>
  );
};

// import { useState } from "react";
import "./styles.css";

// -----child to parent------
// Have a function in parent
// give it to child
// call function in child, send some data in it as arguement

// export default function App() {
//   const handleData = (data) => {
//     console.log("Parent Received: ", data);
//   };

//   return (
//     <div className="App">
//       <h3>Child Received</h3>
//       <Child1 handleData={handleData} />
//     </div>
//   );
// }

// function Child1({ handleData }) {
//   const data = "MasaiSchool";
//   handleData(data);
//   return <h3>Child Received : {data}</h3>;
// }

// ------sibling to sibling--------

// export default function App() {
//   const [data, setdata] = useState("");
//   const handleData = (name) => {
//     console.log("Parent Received: ", name);
//     setdata(name)
//   };
//   console.log("Rendering")
//   return (
//     <div className="App">
//       <h3>Child Received</h3>
//       {/* <Child1 handleData={handleData} /> */}
//       <Child1 func={handleData} />
//       <Child2 data={data}/>
//     </div>
//   );
// }

// // component
// // function Child1({ handleData }) {
// function Child1({ func }) {
//   const data = "MasaiSchool";
//   // handleData(data);
//   func(data);
//   return <h3>Child Received : {data}</h3>;
// }

// function Child2({data}){
//   return <div>Child2 Received : {data}</div>
// }

import { Todo } from "./components/Todo";

export default function App() {
  // useState()
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

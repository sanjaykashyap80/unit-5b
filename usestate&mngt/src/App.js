import { useState, useRef } from "react";
import "./styles.css";
import { Form } from "./components/form";

// 1. Variable, saves it's own state
// 2. change in Variable, shouldn't cause a re-render

export default function App() {
  const inputRef = useRef(null);
  // {current:null}

  return (
    <div className="App">
      {/* <input ref={inputRef} /> */}
      {/* <div 
       ref={inputRef}
       style={{
         height:"400px",
         width:"200px",
         background:"coral"
       }}></div>

       <div style={{
         height:"400px",
         width:"200px",
         background:"aliceblue"
       }}></div>

       <div style={{
         height:"400px",
         width:"200px",
         background:"coral"
       }}></div>
       
       <div style={{
         height:"400px",
         width:"200px",
         background:"aquamarine"
       }}></div>

    <button 
    onClick={() =>{
        // inputRef.current.value = "";
        inputRef.current.scrollIntoView({
          behavior:"smooth",
        })
        // console.log(inputRef.current.value)
    }}> 
    Scroll to top
    </button> */}

      <Form />
    </div>
  );
}

// export default function App() {
//   // const [test, setTest] = useState(1);
//   const test = useRef(1);
//   // const [dummy, setDummy] = useState(1);
//   const [d, setD] = useState(1);

//   console.log("Rerendered",test)
//   return (
//     <div className="App">
//       <button onClick={() => {
//         // test += 1;
//         test.current = test.current + 1
//         console.log(test);
//       }}>Increment test</button>

//       <button
//       onClick={() => {
//         setD((p) => p+1)
//       }}
//       > rerender</button>

//     </div>
//   );
// }

// export default function App() {
//   const [mouse, setMouse] = useState("");
//   return (
//     <div
//     onMouseMove = {(e) =>{
//       console.log(e.clientX, e.clientY)
//       setMouse(`X:${e.clientX} - Y:${e.clientY}`)
//     }}
//     className="App"
//     style = {{
//       display: "flex",
//       background: "coral",
//       width:"300px",
//       height:"300px"
//     }}
//     >
//       {mouse}
//     </div>
//   );
// }

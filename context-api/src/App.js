import "./styles.css";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Body></Body>
    </div>
  );
}

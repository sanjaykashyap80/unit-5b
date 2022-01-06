// import {Link} from "react-router-dom"
// use Link instead of a and href = to

export const Navbar = () => {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/about" style={{ margin: "10px" }}>
        About
      </a>
      <a href="/contact" style={{ margin: "10px" }}>
        Contact us
      </a>
      <a href="/users">Users</a>
    </div>
  );
};

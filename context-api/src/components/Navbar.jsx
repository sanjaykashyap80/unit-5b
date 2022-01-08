import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Cart } from "./Cart";

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      Theme is : {theme} in Navbar
      <Cart />
    </div>
  );
};

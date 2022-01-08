import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const [form, setForm] = useState({});
  const { handleToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        placeholder="Enter your Email"
      />
      <input
        type="text"
        onChange={handleChange}
        name="password"
        placeholder="Enter your Password"
      />
      <button
        onClick={() => {
          // fetch here
          try {
            fetch("reqres.in/api/login", {
              method: "POST",
              body: JSON.stringify(form)
            });
            handleToken("12312412");
            navigate(-1);
            // navigate("/")
          } catch {}
        }}
      >
        Sign in
      </button>
    </div>
  );
};

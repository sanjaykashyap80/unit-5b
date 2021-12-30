import { useRef, useState } from "react";

export const Form = () => {
  // const [form, setForm] = useState({
  //   username:"",
  //   age:"",
  //   address:"",
  // })
  const [form, setForm] = useState(null);
  const ref = useRef(null);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value)
    console.log(ref.current.files);
    const { name, value } = e.target;
    // if(name === "username"){

    // }
    setForm({
      ...form,
      //  [name]:(if it's checkbox ? e.target.checked) : value,
      [name]: value
    });
  };
  // console.log(form);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="enter name"
      ></input>
      <input
        onChange={handleChange}
        name="age"
        type="number"
        placeholder="enter age"
      ></input>
      <input
        onChange={handleChange}
        name="address"
        type="text"
        placeholder="enter address"
      ></input>
      <input ref={ref} onChange={handleChange} type="file"></input>

      <input type="submit" value="submit" />
    </form>
  );
};

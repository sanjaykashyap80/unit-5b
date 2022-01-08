import { useParams } from "react-router-dom";

export const Products = () => {
  const { id } = useParams();
  // req.Params
  // console.log(id)
  return <div>Products details id: {id}</div>;
};

import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { userid } = useParams();
  return <div>Fetch data of user : {userid}</div>;
};

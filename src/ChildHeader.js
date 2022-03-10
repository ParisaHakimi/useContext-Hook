import { useContext } from "react";
import UserContext from "./user-context";

const ChildHeader = () => {
  const userContext = useContext(UserContext);
  return <div>username:{userContext.userName}</div>;
};

export default ChildHeader;

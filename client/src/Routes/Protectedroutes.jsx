
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Protectedroutes = ({ children }) => {
  const token = useSelector((store) => store.token);
  const navigate = useNavigate();
  if (!token) {
    return navigate("/login");
  }

  return children;
};

export default Protectedroutes;

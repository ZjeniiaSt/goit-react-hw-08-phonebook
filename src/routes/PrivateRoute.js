import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Component /> : <Navigate to="login" />;
};

export default PrivateRoute;

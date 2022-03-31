import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

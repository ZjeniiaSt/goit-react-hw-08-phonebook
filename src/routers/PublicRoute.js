import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export default function PublicRoute({ children, resctricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && resctricted;
  if (!shouldRedirect) {
    return children;
  }
  return <Navigate to="/contacts" />;
}

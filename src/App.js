import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Load from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshCurrentUser } from "./redux/auth/auth-operations";
import { getIsFetchingCurrent } from "./redux/auth/auth-selectors";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Container title="Phonebook">
      {isFetchingCurrent ? (
        <h1>Sceleton</h1>
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<Load />}>
            <Routes>
              <Route index element={<HomeView />}></Route>
              <Route path="register" element={<RegisterView />}></Route>
              <Route path="login" element={<LoginView />}></Route>
              <Route path="contacts" element={<ContactsView />}></Route>
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./components/Container";
import AppBar from "./components/Loader/AppBar";
import Load from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshCurrentUser } from "./redux/auth/auth-operations";
import { getIsFetchingCurrentUser } from "./redux/auth/auth-selectors";
import PrivateRouter from "./routers/PrivateRouter";
import PublicRoute from "./routers/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Container title="Phonebook">
      {isFetchingCurrentUser ? (
        <h1>Sceleton</h1>
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<Load />}>
            <Routes>
              <Route index element={<HomeView />}></Route>
              <Route
                path="contacts"
                element={
                  <PrivateRouter>
                    <ContactsView />
                  </PrivateRouter>
                }
              ></Route>
              <Route
                path="register"
                element={
                  <PublicRoute resctricted>
                    <RegisterView />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="login"
                element={
                  <PublicRoute resctricted>
                    <LoginView />
                  </PublicRoute>
                }
              ></Route>
              <Route path="*" element={<HomeView />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MuiLayout from "./components/Layout";
import MuiAppBar from "./components/MuiAppBar";
import Load from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshCurrentUser } from "./redux/auth/auth-operations";
import { getIsFetchingCurrentUser } from "./redux/auth/auth-selectors";
import PrivateRouter from "./routers/PrivateRouter";
import PublicRoute from "./routers/PublicRoute";
import { ThemeProvider } from "@mui/material";
import theme from "./ThemeMui/Theme";
import Skeleton from "@mui/material/Skeleton";

const HomeView = lazy(() => import("./views/MuiHomeView"));
const RegisterView = lazy(() => import("./views/MuiRegisterView"));
const LoginView = lazy(() => import("./views/MuiLoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <MuiLayout title="Phonebook">
        {isFetchingCurrentUser ? (
          <Skeleton variant="rectangular" width={210} height={118} />
        ) : (
          <>
            <MuiAppBar />
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
      </MuiLayout>
    </ThemeProvider>
  );
}

export default App;

import LoggedIn from "../components/loggedIn/LoggedIn";
import MainPage from "../components/mainPage/MainPage";
import { useAuth } from "react-oidc-context";
import { Route, Routes } from "react-router-dom";

const RouteList = () => {
  const auth = useAuth();

  return (
    <Routes>
      {auth.isAuthenticated ? (
        <Route path="/oauth2-redirect" element={<LoggedIn />}></Route>
      ) : (
        <Route path="/" element={<MainPage />}></Route>
      )}
    </Routes>
  );
};

export default RouteList;

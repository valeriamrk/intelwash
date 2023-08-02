import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "react-oidc-context";

import LoggedIn from "./components/loggedIn/LoggedIn";
import MainPage from "./components/mainPage/MainPage";

const oidcConfig = {
  authority: import.meta.env.VITE_AUTHORITY,
  client_id: import.meta.env.VITE_CLIENT_ID,
  client_secret: import.meta.env.VITE_CLIENT_SECRET,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
};

console.log(import.meta.env.VITE_AUTHORITY);
console.log(import.meta.env.VITE_CLIENT_ID);
console.log(import.meta.env.VITE_CLIENT_SECRET);
console.log(import.meta.env.VITE_REDIRECT_URI);

function App() {
  return (
    <>
      <AuthProvider {...oidcConfig}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/oauth2-redirect" element={<LoggedIn />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

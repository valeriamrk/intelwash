import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "oidc-react";
import LoggedIn from "./components/loggedIn/LoggedIn";

const oidcConfig = {
  authority: import.meta.env.VITE_AUTHORITY,
  clientId: import.meta.env.VITE_CLIENT_ID,
  clientSecret: import.meta.env.VITE_CLIENT_SECRET,
  redirectUri: import.meta.env.VITE_REDIRECT_URI,
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
          <Route path="/" element={<div className="card">hi</div>}></Route>
          <Route path="/oauth2-redirect" element={<LoggedIn />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

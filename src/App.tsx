import "./App.css";
import { AuthProvider } from "react-oidc-context";
import RouteList from "./routes/Routes";

// Localhost config
// const oidcConfig = {
//   authority: import.meta.env.VITE_AUTHORITY,
//   client_id: import.meta.env.VITE_CLIENT_ID,
//   client_secret: import.meta.env.VITE_CLIENT_SECRET,
//   redirect_uri: import.meta.env.VITE_REDIRECT_URI_LOCALHOST,
//   scope: import.meta.env.VITE_SCOPE,
// };

// vercel config
const oidcConfig = {
  authority: import.meta.env.VITE_AUTHORITY,
  client_id: import.meta.env.VITE_CLIENT_ID,
  client_secret: import.meta.env.VITE_CLIENT_SECRET,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  scope: import.meta.env.VITE_SCOPE,
};

function App() {
  return (
    <>
      <AuthProvider {...oidcConfig}>
        <RouteList />
      </AuthProvider>
    </>
  );
}

export default App;

import "./App.css";
import { AuthProvider } from "oidc-react";

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
        <div className="card">
          <button>Кнопка 1</button>
          <button>Кнопка 2</button>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;

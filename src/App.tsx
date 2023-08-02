import "./App.css";
import { AuthProvider } from "oidc-react";

function App() {
  return (
    <>
      <AuthProvider
        authority={import.meta.env.VITE_AUTHORITY}
        clientId={import.meta.env.VITE_CLIENT_ID}
        clientSecret={import.meta.env.VITE_CLIENT_SECRET}
        redirectUri={import.meta.env.VITE_REDIRECT_URI}
      >
        <div className="card">
          <button>Кнопка 1</button>
          <button>Кнопка 2</button>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;

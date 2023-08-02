import "./App.css";
import { AuthProvider } from "oidc-react";
// import "dotenv/config";

console.log(import.meta.env.CLIENT_ID);

function App() {
  return (
    <>
      <AuthProvider
        authority={import.meta.env.AUTHORITY}
        clientId={import.meta.env.CLIENT_ID}
        clientSecret={import.meta.env.CLIENT_SECRET}
        redirectUri={import.meta.env.REDIRECT_URI}
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

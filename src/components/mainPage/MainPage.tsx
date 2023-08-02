import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const MainPage = () => {
  const auth = useAuth();

  console.log(auth);

  return (
    <div>
      <button onClick={() => void auth.signinRedirect()}>Log in</button>;
      <button onClick={() => void auth.removeUser()}>Log out</button>
      <Link to="/oauth2-redirect"> to redirect page</Link>
    </div>
  );
};

export default MainPage;

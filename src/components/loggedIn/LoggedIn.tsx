import { useAuth } from "react-oidc-context";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  const auth = useAuth();

  console.log(auth);
  return (
    <div>
      LoggedIn
      <Link to="/"> to main page!</Link>
    </div>
  );
};

export default LoggedIn;

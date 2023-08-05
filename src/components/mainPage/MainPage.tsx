// import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import { Button } from "@/components/ui/button";
import { PageContent, PageHeader, PageLayout } from "../layout/Layout";
import LoggedIn from "../loggedIn/LoggedIn";
import Loader from "../loader/Loader";

const MainPage = () => {
  const auth = useAuth();
  const isLoading = true;
  console.log(auth);

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return <LoggedIn />;
  }

  return <Button onClick={() => void auth.signinRedirect()}>Log in</Button>;

  // return (
  //   <div>
  //     <button onClick={() => void auth.signinRedirect()}>Log in</button>;
  //     <button onClick={() => void auth.removeUser()}>Log out</button>
  //     <Link to="/oauth2-redirect"> to redirect page</Link>
  //   </div>
  // );
};

export default MainPage;

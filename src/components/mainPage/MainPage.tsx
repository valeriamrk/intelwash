import { useAuth } from "react-oidc-context";
import { Button } from "@/components/ui/button";
import Loader from "../loader/Loader";

const MainPage = () => {
  const auth = useAuth();

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

  return <Button onClick={() => void auth.signinRedirect()}>Log in</Button>;
};

export default MainPage;

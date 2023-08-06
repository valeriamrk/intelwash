import { useAuth } from "react-oidc-context";
import { Button } from "@/components/ui/button";
import Loader from "../loader/Loader";
import { useState } from "react";

const MainPage = () => {
  const auth = useAuth();
  const [error, setError] = useState<any>("");

  if (auth.isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  if (auth.error) {
    setError(auth.error);
  }

  const onSignInHandler = async () => {
    try {
      await auth.signinRedirect();
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div>
      <Button onClick={onSignInHandler}>Log in</Button>
      {error ? <div>Ошибка: {error}</div> : ""}
    </div>
  );
};

export default MainPage;

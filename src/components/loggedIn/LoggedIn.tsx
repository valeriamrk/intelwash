import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";
import { PageContent, PageHeader, PageLayout } from "../layout/Layout";
import { Button } from "../ui/button";
import { apiService } from "../../services/api";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import SimpleTable from "../table/SimpleTable";
import ClaimsTable from "../table/ClaimsTable";
import Loader from "../loader/Loader";

type DataType = {
  kindOfData: string;
  code: number;
  userData?: string;
  timestamp?: string;
};

const LoggedIn = () => {
  const auth = useAuth();
  const [dataArray, setDataArray] = useState<Array<DataType>>([]);
  const [isLoadingUserData, setIsLoadingUserData] = useState(false);
  const [isLoadingAdminData, setIsLoadingAdminData] = useState(false);
  const token = auth.user?.access_token || "";

  const claims = auth.user?.profile;
  const role = auth.user?.profile.role;

  let navigate = useNavigate();

  if (auth.isLoading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    );
  }

  const getOpenDataHandler = async () => {
    try {
      setIsLoadingUserData(true);
      const response = await apiService.getDataUser(token);
      setDataArray((prevDataArray) => [
        ...prevDataArray,
        {
          kindOfData: "Открытые данные",
          code: response.status,
          userData: response.data.userData,
          timestamp: response.data.timestamp,
        },
      ]);
      setIsLoadingUserData(false);
    } catch (error: any) {
      setDataArray((prevDataArray) => [
        ...prevDataArray,
        {
          kindOfData: "Открытые данные",
          code: error.response.status,
        },
      ]);
      setIsLoadingUserData(false);
      return error.message;
    }
  };
  const getSecureDataHandler = async () => {
    try {
      setIsLoadingAdminData(true);
      const response = await apiService.getDataAdmin(token);
      setDataArray((prevDataArray) => [
        ...prevDataArray,
        {
          kindOfData: "Закрытые данные",
          code: response.status,
          userData: response.data.userData,
          timestamp: response.data.timestamp,
        },
      ]);
      setIsLoadingAdminData(false);
    } catch (error: any) {
      setDataArray((prevDataArray) => [
        ...prevDataArray,
        {
          kindOfData: "Закрытые данные",
          code: error.response.status,
        },
      ]);
      setIsLoadingAdminData(false);
      return error.message;
    }
  };

  const openDataButton = () => {
    return isLoadingUserData ? (
      <Button disabled className="m-1">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    ) : (
      <Button className="m-1" onClick={getOpenDataHandler}>
        Получить данные
      </Button>
    );
  };

  const secureDataButton = () => {
    return isLoadingAdminData ? (
      <Button disabled className="m-1">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    ) : (
      <Button className="m-1" onClick={getSecureDataHandler}>
        Получить закрытые данные
      </Button>
    );
  };

  const logoutSessionHandler = () => {
    auth.removeUser();
    navigate("/");
  };

  const logoutIdentityHandler = () => {
    auth.signoutRedirect();
  };

  return (
    <PageLayout>
      <PageHeader>
        <div className="w-full flex justify-end item-end">
          <Button
            className="bg-blue-700 hover:bg-blue-800 m-1"
            onClick={logoutSessionHandler}
          >
            Закончить сессию
          </Button>
          <Button
            className="bg-blue-700 hover:bg-blue-800 m-1"
            onClick={logoutIdentityHandler}
          >
            Выйти из IdentityServer
          </Button>
        </div>
      </PageHeader>

      <PageContent>
        {claims ? <ClaimsTable data={claims} /> : null}

        {role === "TestAdminRole" ? (
          <div>
            {openDataButton()}
            {secureDataButton()}
          </div>
        ) : (
          <div> {openDataButton()}</div>
        )}
        {dataArray.length === 0 ? null : <SimpleTable data={dataArray} />}
      </PageContent>
    </PageLayout>
  );
};

export default LoggedIn;

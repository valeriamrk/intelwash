import { useAuth } from "react-oidc-context";
import { Link } from "react-router-dom";
import {
  PageContent,
  PageFooter,
  PageHeader,
  PageLayout,
} from "../layout/Layout";
import { Button } from "../ui/button";
import { AdminData, UserData, apiService } from "../../services/api";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import SimpleTable from "../table/SimpleTable";
import { AxiosError } from "axios";

type DataType = {
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
  console.log(token);

  const isUser = false;

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

  // Результат ответа API – отобразить в web-приложении (код ответа, и данные) ОК

  // разобрать все Claims которые есть в JWT токенах, и вывести их в виде таблицы имя/значение. Разрешенный список Scopes для тестового клиента: ( openid email profile roles permissions UiTest.API )

  // зависимости от Claims в токенах отображать разные кнопки доступа к данным

  // сделать редирект при логауте на главную

  // сделать логаут на айдентити сервере

  console.log(auth);
  return (
    <PageLayout>
      <PageHeader>
        <div className="w-full flex justify-end item-end">
          <Button
            className="bg-blue-700 hover:bg-blue-800"
            onClick={() => void auth.removeUser()}
          >
            Log out
          </Button>
        </div>
      </PageHeader>
      <PageContent>
        {isUser ? (
          <Button
            className="bg-amber-500 hover:bg-cyan-600"
            onClick={getOpenDataHandler}
          >
            Получить данные
          </Button>
        ) : (
          <div>
            {isLoadingUserData ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button onClick={getOpenDataHandler}>Получить данные</Button>
            )}
            {isLoadingAdminData ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button onClick={getSecureDataHandler}>
                Получить закрытые данные
              </Button>
            )}
          </div>
        )}
        {dataArray.length === 0 ? null : <SimpleTable data={dataArray} />}
      </PageContent>
      <PageFooter>
        <Link to="/"> to main page!</Link>
      </PageFooter>
    </PageLayout>
  );
};

export default LoggedIn;

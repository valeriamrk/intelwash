import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      Hi there
      <Link to="/oauth2-redirect"> to redirect page</Link>
    </div>
  );
};

export default MainPage;

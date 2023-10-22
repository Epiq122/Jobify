import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>ERROR ERROR</h1>
      <Link to={"/"}>Go to Home Page</Link>
    </div>
  );
};
export default Error;

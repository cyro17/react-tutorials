import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;

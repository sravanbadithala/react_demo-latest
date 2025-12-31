import { useRouteError } from "react-router-dom";

const ErrorRouter=()=>{
    const error=useRouteError();
    return(<div>
        <h1>Oopps...!!!</h1>
        <h2>Some thing went wrong</h2>
        <p>{error.status}</p>
        </div>
    );
}
export default ErrorRouter;
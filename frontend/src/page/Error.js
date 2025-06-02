import { useRouteError } from "react-router";

function Errors (){
    const error = useRouteError();

    console.log(error.status);
    let status = error.status;
    let message = "Erorr unknown"
    if(status === 500){
        message = "Error 500 ."
    }

    if(status === 404){
        message = "Error 404 ."
    }


    return <>
        <p>
            {message}
        </p>
    </>
}

export default Errors;
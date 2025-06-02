import EventForm from "../components/EventForm";
import { redirect, useRouteLoaderData } from "react-router";

function NewEventPage(){

    const data = useRouteLoaderData("eventdetail");
    console.log(data);
    

    return <>
        <EventForm event={[]} />
    </>
}

export default NewEventPage;

export async function action({ request, params }) {
    const data = await request.formData();
    const formData = Object.fromEntries(data.entries())
    
    const response = await fetch(`http://localhost:8080/events`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    if(!response.ok){
        return ({message : "Sowme"},{status : response.status})
    }
    
    return redirect("/events")
}
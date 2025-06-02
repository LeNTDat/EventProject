import {  redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";

function EventDetailPage() {

    let res = useRouteLoaderData("eventdetail")

    return <div>
        <EventItem event={res.event || []} />
    </div>
}

export default EventDetailPage;

export const loader = async (data) => {
    const id = data.params.id;
    const response = await fetch(`http://localhost:8080/events/${id}`);
    console.log("response", response);
    
    if (!response.ok) {
        throw new Response({ message: "Check" }, {
            status: response.status
        });
    } else {
        return response;
    }
}

export const action = async ({params, request})=>{
    const id = params.id;
    const response = await fetch(`http://localhost:8080/events/${id}`,{
        method: request.method
    });
    
    if (!response.ok) {
        throw new Response({ message: "Check" }, {
            status: response.status
        });
    } 
    
    return redirect('/events')
}
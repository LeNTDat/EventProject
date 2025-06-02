import EventsList from "../components/EventsList";
import { useRouteLoaderData } from "react-router";

function Events() {

    const response = useRouteLoaderData("EventLoader")


    return <> <EventsList events={response.events} /></>
}

export default Events;

export const loader = async () => {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        throw new Response({message : 'Could not fetch data events.'}, {
            status: response.status
        })
    } else {
        return response;
    }
}
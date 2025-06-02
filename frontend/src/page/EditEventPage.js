import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router";

function EditEventPage(){
    const data = useRouteLoaderData("eventdetail")
    
    return <>
        <EventForm event={data.event}/>
    </>
}

export default EditEventPage;
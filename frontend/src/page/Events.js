import { useEffect, useState } from "react";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router";

function Events() {
    let dummyEvent = [
        {
            id: 1,
            title: "Check",
            date: "11/1/2025",
            image: "https://static.vecteezy.com/system/resources/previews/011/621/738/non_2x/image-picture-icon-design-template-free-vector.jpg"
        },
        {
            id: 2,
            title: "Check2",
            date: "11/2/2025",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lG-eIF9b49zFH-FLPCOn49PQoF-LarP3FA&s"
        },
        {
            id: 13,
            title: "Check3",
            date: "11/3/2025",
            image: "https://png.pngtree.com/png-clipart/20190628/original/pngtree-vacation-and-travel-icon-png-image_4032146.jpg"
        }
    ]

    const events = useLoaderData()
    console.log("events", events);


    return <> <EventsList events={events} /></>
}

export default Events;

export const loader = async () => {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        ///...
    } else {
        const resData = await response.json();
        return resData.events;
    }
}
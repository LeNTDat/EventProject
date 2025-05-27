import { useParams } from "react-router";

function EventDetailPage(){

    let param = useParams()
    return <div>
        EventDetailPage
        <p>
            {param.id}
        </p>
    </div>
}

export default EventDetailPage;
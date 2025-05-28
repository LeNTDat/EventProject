import { Link, useParams } from "react-router";

function EventDetailPage(){

    let param = useParams()
    return <div>
        EventDetailPage
        <p>
            {param.id}
        </p>
        <Link to="..." relative="...">Back</Link>
    </div>
}

export default EventDetailPage;
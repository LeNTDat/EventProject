import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router';

function EventItem({ event }) {
  const submit = useSubmit();
  function StartDeleteHandler() {

    const proceed = window.confirm("Do you want to delete it ?")

    if(proceed){
      submit(null, {method:'delete'})
    }

  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={`edit`}>Edit</Link>
        <button onClick={StartDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

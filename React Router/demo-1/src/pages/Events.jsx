import { useLoaderData } from "react-router";
import EventsLists from "../components/EventLists";

function Events() {
  const events = useLoaderData();
  return <EventList events={events} />;
}

export default Events;

export async function loader() {
  const res = await fetch("http://localhost:8080/events");
  if (!res.ok) {
    //
  } else {
    const resData = await res.json();
    return resData.events;
  }
}

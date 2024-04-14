import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

// this loader function is rendered on client side, runs on browser not on server, hence we cannot use any hooks or params
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // here we throw a response as error, and we can get this promise using useRouteError hook
    // throw new Response(
    //   JSON.stringify({ message: "could not fetch events", status: 500 })
    // );

    /* instead of creating and throwing a response , we can use json function of react-router-dom */
    throw json({ message: "could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}

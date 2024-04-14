/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsLetterAction } from "./pages/NewsLetter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader, // using the same loader fucntion to load two pages at a time, this loader will return to all the child routes
          },
          {
            path: ":eventId",
            id: "event-detail", // this event-id is needed to use useRouteLoaderData
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },

          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsLetterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

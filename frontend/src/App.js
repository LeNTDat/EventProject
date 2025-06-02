// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./page/HomePage";
import RootLayout from "./router/root";
import Events, { loader as EventLoader } from "./page/Events";
import EventDetailPage, { loader as EventDetailLoader, action as DeleteEvent } from "./page/EventDetailPage";
import NewEventPage, {action as newEventAction} from "./page/NewEventPage";
import EditEventPage from "./page/EditEventPage";
import EventRootLayout from "./router/eventsRoot";
import Errors from "./page/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Errors />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'events',
        element: <EventRootLayout />,
        loader: EventLoader,
        id:'EventLoader',
        children: [
          {
            index: true,
            element: <Events />
          },
          {
            path: ':id',
            id: "eventdetail",
            loader: EventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: DeleteEvent,
              },
              {
                path: 'edit',
                element: <EditEventPage />
              }
            ]
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: newEventAction
          }
        ]
      }
    ]

  }
])

function App() {
  return <RouterProvider router={router}><div></div></RouterProvider>
}

export default App;

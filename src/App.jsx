import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventsPage />,
          children: [
            { index: true },
            { path: "add-event", element: <AddEvent /> },
            { path: "edit-event", element: <EditEvent /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

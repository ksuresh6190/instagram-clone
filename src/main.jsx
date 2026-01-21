import { createRoot } from "react-dom/client";
import Suggestion from "./Suggestion.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Profile.jsx";
import ViewStory from "./ViewStory.jsx";
import Explore from "./Explore.jsx";
import Reels from "./Reels.jsx";
import Message from "./Message.jsx";
import Dashboard from "./Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/suggestion",
    element: <Suggestion />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/viewStory/:id/:tot",
    element: <ViewStory />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/reels",
    element: <Reels />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

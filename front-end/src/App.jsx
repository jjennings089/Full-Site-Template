import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.css";
import HomePage from "./pages/homepage";

const routes = [
  {
    path: "/",
    element: <HomePage />
  }
];

const router = createBrowserRouter(routes);

function App() {
  <RouterProvider router={router} />;
}

export default App;

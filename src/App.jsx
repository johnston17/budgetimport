import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { DashBoardLoader } from "./Pages/Dashboard";
import Main, { MainLoader } from "./Layouts/Main";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: DashBoardLoader,
      },
      {
        path :"about",
        element: <p>About element</p>,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

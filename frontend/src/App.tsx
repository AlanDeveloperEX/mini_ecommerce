import { Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./global/styles/global";
import allRoutes from "./routes";

const router = createBrowserRouter(allRoutes);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

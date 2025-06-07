import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./Components/topbar/Topbar.jsx";
import Sidebar from "./Components/sidebar/Sidebar.jsx";
import "./App.css";

export default function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        {router}
      </div>
    </>
  );
}

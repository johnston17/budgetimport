import React from "react";
import { fetchData } from "../Helper/LocalData";
import { Outlet, useLoaderData } from "react-router-dom";

//assets
import wave from "../assets/wave.svg";

//Loader
export const MainLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Main = () => {
  const { userName } = useLoaderData();

  return (
    <>
      <div className="layout">
        <h1>Main</h1>
        <main>
          <Outlet />
        </main>
        <img src={wave} alt="wave" />
      </div>
    </>
  );
};

export default Main;

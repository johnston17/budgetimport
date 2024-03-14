import React from "react";
import { fetchData } from "../Helper/LocalData";
import { useLoaderData } from "react-router-dom";

export const DashBoardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

const Dashboard = () => {
  const { userName } = useLoaderData();

  return (
    <>
      <div>{userName} DashBoard</div>
    </>
  );
};

export default Dashboard;

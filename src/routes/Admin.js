import React from "react";
import { Route } from "react-router-dom";

const Home = () => {
  return <h1>Admin Routes</h1>;
};

// Use Private routes is the ideal here

export default function Admin() {
  return (
    <>
      <Route path="/" exact component={Home}></Route>
    </>
  );
}

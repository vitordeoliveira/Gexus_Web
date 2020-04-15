import React from "react";
import { Route } from "react-router-dom";

const Home = () => {
  return <h1>Hello World</h1>;
};

export default function Public() {
  return (
    <>
      <Route path="/" exact component={Home}></Route>
    </>
  );
}

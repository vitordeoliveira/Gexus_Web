import React from "react";
import { Route } from "react-router-dom";

import Homepage from "../pages/Homepage";

export default function Public() {
  return (
    <>
      <Route path="/" exact component={Homepage}></Route>
    </>
  );
}

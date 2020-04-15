import React from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";

import Public from "../routes/Public";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Public></Public>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

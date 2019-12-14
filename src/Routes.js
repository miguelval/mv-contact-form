import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact.js";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Contact} />
    </Switch>
  );
}
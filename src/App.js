import React from "react";
import HomePage from "./pages/homepage/homepage.composnent";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import ShopPage from "./pages/shop/shop.componenet";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route path={"/shop"} component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

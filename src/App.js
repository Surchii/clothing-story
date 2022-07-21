import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import "./App.css";

import { checkUserSession } from "./redux/user/user.action";

import SignInAndSignUpPage from "./pages/sign-in-and sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.composnent";
import ShopPage from "./pages/shop/shop.componenet";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";


const App = () => {

   const currentUser = useSelector(selectCurrentUser);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(checkUserSession());
   }, [dispatch])

   return (
      <div>
         <Header />
         <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route path={"/shop"} component={ShopPage} />
            <Route exact path={"/checkout"} component={CheckoutPage} />

            <Route
               exact
               path={"/signin"}
               render={() =>
                  currentUser ? (
                     <Redirect to="/" />
                  ) : (
                     <SignInAndSignUpPage />
                  )
               }
            />
         </Switch>
      </div>
   );
}


export default App;

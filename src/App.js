import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";
import "./App.css";

import { checkUserSession } from "./redux/user/user.action";

import SignInAndSignUpPage from "./pages/sign-in-and sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.composnent";
import ShopPage from "./pages/shop/shop.componenet";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";


const App = ({ checkUserSession, currentUser }) => {

   useEffect(() => {
      checkUserSession();
   }, [checkUserSession])




   //  this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
   //    if (userAuth) {
   //      const userRef = await createUserProfileDocument(userAuth);

   //      userRef.onSnapshot((snapShot) => {
   //        setCurrentUser({
   //          id: snapShot.id,
   //          ...snapShot.data(),
   //        });
   //      });
   //    }
   //    setCurrentUser(userAuth);
   //  });

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


const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
   checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

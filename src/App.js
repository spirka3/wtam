import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Navigation from "./Navigation";
import HomePage from "./pages/home/HomePage";
import EmptyPage from "./pages/unexpected/EmptyPage";
import OdborkyPage from "./pages/odborky/OdborkyPage";
import ChallengesPage from "./pages/challenges/ChallengesPage";
import MyActivitiesPage from "./pages/my-profile/activities/MyActivitiesPage";
import MyTeamPage from "./pages/my-profile/team/MyTeamPage";
import ErrorPage from "./pages/unexpected/ErrorPage";
import AuthModal from "./auth/AuthModal";
import ProfilePage from "./pages/my-profile/settings/ProfilePage";
import { getItem } from "./utils/functions";
import { AuthProvider } from "./providers/AuthProvider";
// import jwtDecode from "jwt-decode";

function App() {
  axios.defaults.baseURL = "https://www.polkadot-hub.eu/";

  const backgroundStyle = {
    opacity: 0.05,

    backgroundImage:
      "url('https://st2.depositphotos.com/3580719/10445/v/950/depositphotos_104453362-stock-illustration-seamless-background-with-simple-hand.jpg')",
  };

  useEffect(() => {
    // setToast({ message: "hahaha", time: "Prave teraz" });
  }, []);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    let auth = getItem("auth");
    try {
      // jwtDecode(getItem("auth").token);
    } catch (error) {
      auth = {};
    }

    return auth.token ? (
      <Route exact {...rest} component={() => <Component />} />
    ) : (
      <AuthModal action="login" />
    );
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <div className="bg" style={backgroundStyle}></div>
        <div className="my-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/*<Route path="/novinky" component={EmptyPage} />*/}
            <Route path="/odborky" component={OdborkyPage} />
            <Route path="/vyzvy" component={ChallengesPage} />
            <Route path="/ocenenia" component={EmptyPage} />
            <PrivateRoute path="/progres" component={MyActivitiesPage} />
            <PrivateRoute path="/druzina" component={MyTeamPage} />
            <PrivateRoute path="/profil" component={ProfilePage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

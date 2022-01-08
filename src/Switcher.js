import React from "react";
import { Switch, Route } from "react-router-dom";

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

function Switcher() {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return getItem("auth").token ? (
      <Route exact {...rest} component={() => <Component {...rest} />} />
    ) : (
      <AuthModal action="login" />
    );
  };

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/odborky" component={() => <OdborkyPage />} />
      <Route path="/vyzvy" component={ChallengesPage} />
      <Route path="/ocenenia" component={EmptyPage} />
      <PrivateRoute path="/progres" component={MyActivitiesPage} />
      <PrivateRoute path="/druzina" component={MyTeamPage} />
      <PrivateRoute path="/profil" component={ProfilePage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
}

export default Switcher;

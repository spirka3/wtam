import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import { AuthProvider } from "./providers/AuthProvider";
import HomePage from "./pages/home/HomePage";
import EmptyPage from "./pages/unexpected/EmptyPage";
import OdborkyPage from "./pages/odborky/OdborkyPage";
import ChallengesPage from "./pages/challenges/ChallengesPage";
import MyProgressPage from "./my-profile/progress/MyProgressPage";
import MyTeamPage from "./my-profile/team/MyTeamPage";
import ErrorPage from "./pages/unexpected/ErrorPage";
import AuthModal from "./components/modals/AuthModal";
import ProfilePage from "./my-profile/settings/ProfilePage";
import { getItem } from "./utils/functions";
import jwtDecode from "jwt-decode";

function App() {
  const [state, setState] = useState(false);

  const Private = ({ component: Component, ...rest }) => {
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
        {/*<div*/}
        {/*  className="demo-wrap"*/}
        {/*  style={{*/}
        {/*    backgroundRepeat: "repeat",*/}
        {/*    backgroundImage: "url(/images/bg.jpg)",*/}
        {/*  }}*/}
        {/*>*/}
        <img
          className="demo-bg"
          src="https://st2.depositphotos.com/3580719/10445/v/950/depositphotos_104453362-stock-illustration-seamless-background-with-simple-hand.jpg"
          alt=""
        />
        <div style={{ margin: "4rem 8rem" }} className="demo-content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/novinky" component={EmptyPage} />
            <Route path="/odborky" component={OdborkyPage} />
            <Route path="/vyzvy" component={ChallengesPage} />
            <Route path="/aktivity" component={EmptyPage} />
            <Private path="/progres" component={MyProgressPage} />}
            <Private path="/druzina" component={MyTeamPage} />}
            <Private path="/profil" component={ProfilePage} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </div>
        {/*</div>*/}
        {state && <AuthModal action="login" />}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import React from "react";
import axios from "axios";

import Navigation from "./Navigation";
import Provider from "./Provider";
import Switcher from "./Switcher";

function App() {
  axios.defaults.baseURL = "https://www.polkadot-hub.eu/";

  return (
    <Provider>
      <Navigation />
      <div className="bg" style={backgroundStyle} />
      <div className="my-content">
        <Switcher />
      </div>
    </Provider>
  );
}

const backgroundStyle = {
  opacity: 0.03,
  backgroundImage:
    "url('https://st2.depositphotos.com/3580719/10445/v/950/depositphotos_104453362-stock-illustration-seamless-background-with-simple-hand.jpg')",
};

export default App;

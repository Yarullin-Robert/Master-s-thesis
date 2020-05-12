import React from "react";
import ReactDOM from "react-dom";
import "./Styles/Scss/Main.scss";
import App from "./App";
import "./Styles/Js/OnScroll";
import "../node_modules/@fortawesome/fontawesome-free/js/all";
import Store from "./Redux/State";

let RenderEntireTree = (State) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        State={State}
        AddTestElement={Store.AddTestElement.bind(Store)}
        UpdateTestElement={Store.UpdateTestElement.bind(Store)}
      />
    </React.StrictMode>,
    document.querySelector("#root")
  );
};

RenderEntireTree(Store.GetState());

Store.Subscribe(RenderEntireTree);

import React from "react";

let Store = {
  _State: {
    Menu: [
      { id: "home", title: "Home", link: "Home", class: "hidden" },
      {
        id: "update__account",
        title: "Account",
        link: "UpdateAccount",
        class: "hidden",
      },
      { id: "log__out", title: "Log out", link: "LogOut", class: "hidden" },
      { id: "log__in", title: "Log in", link: "LogIn" },
      { id: "sign__up", title: "Sign up", link: "SignUp" },
      { id: "callback__test", title: "callback test", link: "CallbackTest" },
    ],

    Socials: [
      {
        id: "instagram",
        class: "fab fa-instagram",
        link: "https://instagram.com",
      },
      { id: "vk", class: "fab fa-vk", link: "https://vk.com/robertoyarullin" },
      {
        id: "mail",
        class: "far fa-envelope",
        link: "mailto:fallenlord45@gmail.com",
      },
      { id: "tel", class: "fas fa-phone", link: "tel:89872468677" },
    ],

    CallbackTestPage: {
      CallbackTest: [{ id: 1, title: "alex" }],
      NewValue: "",
    },
  },

  GetState() {
    return this._State;
  },

  RenderEntireTree() {
    console.log("State has changed");
  },

  AddTestElement() {
    if (this._State.CallbackTestPage.NewValue !== "") {
      let NewElement = {
        id:
          this._State.CallbackTestPage.CallbackTest.reduce((value, current) => {
            return value < current.id ? current.id : {};
          }, 0) + 1,

        title: this._State.CallbackTestPage.NewValue,
      };

      this._State.CallbackTestPage.CallbackTest.push(NewElement);
      this._State.CallbackTestPage.NewValue = "";

      this.RenderEntireTree(this._State);
    } else {
      alert("Field is empty");
    }
  },

  UpdateTestElement(Value) {
    
    console.log('change')
    this._State.CallbackTestPage.NewValue = Value;

    this.RenderEntireTree(this._State);
  },

  Subscribe(observer) {
    this.RenderEntireTree = observer;
  },
};

export default Store;

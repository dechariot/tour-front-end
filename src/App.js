import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//IMPORT COMPONENTS
import Header from "./components/Header";

//IMPORT VIEWS
import Home from "./views/Home";
import LoginPage from "./views/LoginPage";
import MemberPage from "./views/MemberPage";
import ProfilePage from "./views/ProfilePage";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const urlToken = window.location.href.split("?token=")[1]
      ? window.location.href.split("?token=")[1]
      : null;
    console.log(urlToken);
    const localToken = localStorage.getItem("token");
    const token = localToken || urlToken;

    if (!token) return;
    const res = await fetch(`https://localhost:5000/users/me`, {
      headers: { authorization: `Bearer ${token}` },
    });

    const body = await res.json();

    console.log(body);

    if (body.status === "ok") {
      setUser(body.data);
      localStorage.setItem("token", token);
    } else {
      setUser(null);
      localStorage.removeItem("token");
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/member" exact component={MemberPage} />
          <Route path="/profile" exact component={ProfilePage} />
        </Switch>
      </BrowserRouter>
      <p>Hi dev!</p>
    </div>
  );
}

export default App;

import React from "react"
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css"
import NavBar from "./components/NavBar"
import ContactMe from "./components/ContactMe"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"


function App() {

  return (
    <div className="homePort">
      <NavBar />
    <BrowserRouter>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contactme" component={ContactMe} />
              <Route exact path="/aboutme" component={AboutMe}  />
              <Route exact path="/projects" component={Projects} />
            </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import home from "./routes/home";
import about from "./routes/about";
import Detail from "./routes/Detail";
import Navigation from "./componenets/Navigation"
import "./App.css";

function App() {
  return (
    <HashRouter>
        <Navigation/>
        <Route path="/" exact={true} component={home} />
        <Route path="/about" component={about}/>
        <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  )
}

export default App;
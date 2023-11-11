import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/d">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia!</div>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

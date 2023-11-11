import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import BookDeatils from "./BookDetails";
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

          <Route exact path="/create">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia!</div>
          </Route>
          
          <Route exact path="/books/:id">
            <BookDeatils />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

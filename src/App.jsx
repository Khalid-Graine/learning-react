import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import BookDeatils from "./BookDetails";
import CreateNewBook from "./Create"
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
          <CreateNewBook /> 
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

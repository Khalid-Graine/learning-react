
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import BookDeatils from "./components/BookDetails";
import CreateNewBook from "./components/Create"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import Hooks from "./views/Hooks";

function App() {
  let x = [{name: '1'},{name: '2'},{name: '3'}];
  x = [ ...x,{name: '4',id:'4'}]
  x[3] = {...x[3],id: 'not'}
  console.log(x[3])
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
         
         <Route exact path="/hooks">
          <Hooks />
         </Route>

          <Route path="*">
            <NotFound />
          </Route>
       
        </Switch>
      </div>
    </Router>
  );
}

export default App;

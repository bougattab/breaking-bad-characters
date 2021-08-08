import './App.css';
import Home from "./pages/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Character from "./pages/Character"

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/:id">  
        <Character/>
      </Route>       
      <Route path="/">
        <Home/>
      </Route>
      <Redirect to='/'/>
      </Switch>
    </Router>
  );
}

export default App;

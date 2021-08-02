import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from "./views/Home";
import About from "./views/About";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path={"/"} component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;

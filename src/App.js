import "./Components/Custom.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className='font_poppins'>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              {/* <NotFound></NotFound> */}
            </Route>
            <Route path='/servcies'>
              {/* <NotFound></NotFound> */}
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

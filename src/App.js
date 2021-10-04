import "./Components/Custom.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// all components
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import Featuers from "./Components/Featuers/Featuers";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className='font_poppins'>
      {/* Router for defining routes */}
      <Router>
        <div>
          <Header></Header>
          {/* swithch for change routes for different address */}
          <Switch>
            {/* define routes */}
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/features'>
              <Featuers></Featuers>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;

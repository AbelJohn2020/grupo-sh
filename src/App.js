import React from 'react';
// import Navbar from './components/navbar/Navbar';
// import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import ServicesSH from './pages/ServicesSH';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/servicios" component={ServicesSH}/>
          <Route path="/nosotros" component={AboutUs}/>
          <Route path="/herbalife" component={Products}/>
          <Route path="/contactanos" component={ContactUs}/>
        </Switch>
      </Router>
      {/* <Navbar />
      <AboutUs /> */}
    </div>
  );
}

export default App;

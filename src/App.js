import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Aloe from './components/PagesInProducts/Aloe/Aloe';
import AloeCon from './components/PagesInProducts/AloeCon/AloeCon';
import Complement from './components/PagesInProducts/Complement/Complement';
import FormOne from './components/PagesInProducts/FormOne/FormOne';
import Protein from './components/PagesInProducts/Protein/Protein';
import Skin from './components/PagesInProducts/Skin/Skin';
import Sport from './components/PagesInProducts/Sport/Sport';
import Te from './components/PagesInProducts/Te/Te';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import ServicesSH from './pages/ServicesSH';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/servicios" component={ServicesSH}/>
          <Route exact path="/nosotros" component={AboutUs}/>
          <Route exact path="/herbalife" component={Products}/>
          <Route exact path="/contactanos" component={ContactUs}/>

          <Route exact path="/herbalife/batidonutricionalfórmula1" component={FormOne}/>
          <Route exact path="/herbalife/teconcentradodehierbas" component={Te}/>
          <Route exact path="/herbalife/herbalaloeconcentrado" component={AloeCon}/>
          <Route exact path="/herbalife/proteína" component={Protein}/>
          <Route exact path="/herbalife/complementos" component={Complement}/>
          <Route exact path="/herbalife/deporteyvidaactiva" component={Sport}/>
          <Route exact path="/herbalife/herbalifeskin" component={Skin}/>
          <Route exact path="/herbalife/herbalaloe" component={Aloe}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

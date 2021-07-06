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

          <Route exact path="/herbalife/batido%20nutricional%20fórmula1" component={FormOne}/>
          <Route exact path="/herbalife/té%20concentrado%20de%20hierbas" component={Te}/>
          <Route exact path="/herbalife/herbal%20aloe%20concentrado" component={AloeCon}/>
          <Route exact path="/herbalife/proteína" component={Protein}/>
          <Route exact path="/herbalife/complementos" component={Complement}/>
          <Route exact path="/herbalife/deporte%20y%20vida%20activa" component={Sport}/>
          <Route exact path="/herbalife/herbalife%20skin" component={Skin}/>
          <Route exact path="/herbalife/herbal%20aloe" component={Aloe}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

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
          <Route path="/servicios" component={ServicesSH}/>
          <Route path="/nosotros" component={AboutUs}/>
          <Route path="/herbalife" component={Products}/>
          <Route path="/contactanos" component={ContactUs}/>

          <Route path="/batido-nutricional-fórmula-1" component={FormOne}/>
          <Route path="/té-concentrado-de-hierbas" component={Te}/>
          <Route path="/herbal-aloe-concentrado" component={AloeCon}/>
          <Route path="/proteína" component={Protein}/>
          <Route path="/complementos" component={Complement}/>
          <Route path="/deporte-y-vida-activa" component={Sport}/>
          <Route path="/herbalife-skin" component={Skin}/>
          <Route path="/herbal-aloe" component={Aloe}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

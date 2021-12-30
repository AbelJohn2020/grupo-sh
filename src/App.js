import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Activaink from './components/PagesInProducts/Activaink/Activaink';
import InkaYaku from './components/PagesInProducts/InkaYaku/InkaYaku';
import Colageno from './components/PagesInProducts/Colageno/Colageno';
import ColagenoHidrolizado from './components/PagesInProducts/ColagenoHidrolizado/ColagenoHidrolizado';
import InkamenPasion from './components/PagesInProducts/InkamenPasion/InkamenPasion';
import Inkapro from './components/PagesInProducts/Inkapro/Inkapro';
import Moringa from './components/PagesInProducts/Moringa/Moringa';
import SuperInka from './components/PagesInProducts/SuperInka/SuperInka';
import SuperCafe from './components/PagesInProducts/SuperCafe/SuperCafe';
import SuperTe from './components/PagesInProducts/SuperTe/SuperTe';
import SuperTePlus from './components/PagesInProducts/SuperTePlus/SuperTePlus';
import VinoInkavida from './components/PagesInProducts/VinoInkavida/VinoInkavida';
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
          <Route exact path="/inkavida" component={Products}/>
          <Route exact path="/contactanos" component={ContactUs}/>

          <Route exact path="/inkavida/activaink" component={Activaink}/>
          <Route exact path="/inkavida/agua-ozonizada" component={InkaYaku}/>
          <Route exact path="/inkavida/colageno" component={Colageno}/>
          <Route exact path="/inkavida/colageno-hidrolizado" component={ColagenoHidrolizado}/>
          <Route exact path="/inkavida/inkamen-pasion" component={InkamenPasion}/>
          <Route exact path="/inkavida/inkapro" component={Inkapro}/>
          <Route exact path="/inkavida/moringa" component={Moringa}/>
          <Route exact path="/inkavida/nutriente-energetico" component={SuperInka}/>
          <Route exact path="/inkavida/super-cafe" component={SuperCafe}/>
          <Route exact path="/inkavida/super-te" component={SuperTe}/>
          <Route exact path="/inkavida/super-te-plus" component={SuperTePlus}/>
          <Route exact path="/inkavida/vino-inkavida" component={VinoInkavida}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

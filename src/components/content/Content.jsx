import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NasaPic from '../nasa-pic/NasaPic.jsx';
import StarWars from '../star-wars/StarWars.jsx';
import BlackHoles from '../black-holes/BlackHoles.jsx';
import SolarSystem from '../solar-system/SolarSystem.jsx';
import Atmospheres from '../atmospheres/Atmospheres.jsx';
import Home from '../home/Home.jsx';

const Content = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/photo-of-the-day' component={NasaPic}/>
      <Route path='/star-wars' component={StarWars}/>
      <Route path='/black-holes' component={BlackHoles}/>
      <Route path='/solar-system' component={SolarSystem}/>
      <Route path='/planet-atmospheres' component={Atmospheres}/>
      <Route exact path='**' component={Home}/>
    </Switch>
  </div>
)

export default Content

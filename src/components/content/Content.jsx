import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NasaPic from '../nasa-pic/NasaPic.jsx';
import StarWars from '../star-wars/StarWars.jsx';
import Home from '../home/Home.jsx';

const Content = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/photo-of-the-day' component={NasaPic}/>
      <Route path='/star-wars' component={StarWars}/>
      <Route exact path='**' component={Home}/>
    </Switch>
  </div>
)

export default Content

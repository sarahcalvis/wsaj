import React from 'react';
import './App.css';
import Home from './Home.js';
import Schedule from './Schedule.js';
import DJShows from './DJShows.js';
import Contact from './Contact.js';
import { Link, Route } from 'react-router-dom';

function App() {
  return (
   <div>
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/shows">DJ Shows</Link></li>
         <li><Link to="/schedule">Schedule</Link></li>
         <li><Link to="/contact">Contact Info</Link></li>
      </ul>

      <Route exact={true} path="/" component={Home}/>
      <Route exact={true} path="/shows" component={DJShows}/>
      <Route exact={true} path="/schedule" component={Schedule}/>
      <Route exact={true} path="/contact" component={Contact}/>
   </div>
  )
}
export default App;

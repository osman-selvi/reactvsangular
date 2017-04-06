import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'



//pages router
import App from './modules/App'
import About from './modules/About'
import Service from './modules/Service'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/service" component={Service}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))

import React from 'react'
import { Link } from 'react-router';
import Header from './Header'

export default React.createClass({
  render() {
    return (
      <div>
       <Header/>
          <div style={{border: '1px solid #b3b3b3', backgroundColor: '#ffb3b3', padding: 10}}><h2>Home page</h2></div>
      </div>
    )
  }
})

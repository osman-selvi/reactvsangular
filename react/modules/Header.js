import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <div>
                <ul role="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Service</Link></li>
                </ul>
            </div>
        )
    }
})



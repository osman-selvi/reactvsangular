import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Header from './Header'

export default React.createClass({

    getInitialState: function () {
        return {
            pageId: "props id"
        }
    },

    render() {
        return (
            <div>
              <Header/>
                <div style={{border: '1px solid #b3b3b3', backgroundColor: '#90ee90', padding: 10}}><h2>About page</h2></div>
            </div>
        )
    }

})

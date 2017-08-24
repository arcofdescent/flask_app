
// Our main container App

import React, { Component } from 'react';
//import { connect } from 'react-redux';
import SymbolInput from '../components/SymbolInput.jsx';
import classes from '../scss/iex.scss';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
	return(
	    <div className="container">
	      <div className="row">
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-10">
                  <SymbolInput />
                </div>
	      </div>
	    </div>
	);
    }
}

export default App;


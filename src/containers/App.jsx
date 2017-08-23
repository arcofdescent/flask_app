
// Our main container App

import React, { Component } from 'react';
//import { connect } from 'react-redux';
import classes from '../scss/iex.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { symbol: '' };

        this.handleChange = this.handleChange.bind(this);
        this.getQuote = this.getQuote.bind(this);
        
    }

    handleChange(e) {
        this.setState({symbol: e.target.value});
    }
    
    getQuote() {
        console.log('getQuote for ' + this.state.symbol);
    }
    
    render() {
	return(
	    <div className="container">
	      <div className="row">
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-10">
                  <input type="text" value={this.state.symbol}
                         onChange={this.handleChange} placeholder="Symbol" />
                  <button onClick={this.getQuote}>Get Quote</button>
                </div>
	      </div>
	    </div>
	);
    }
}

export default App;


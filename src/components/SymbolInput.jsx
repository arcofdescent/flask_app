
import React, { Component } from 'react';
//import { connect } from 'react-redux';

class SymbolInput extends Component {

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
            <div>
              <input type="text" value={this.state.symbol}
                     onChange={this.handleChange} placeholder="Symbol" />
              <button onClick={this.getQuote}>Get Quote</button>
            </div>
	);
    }
}

export default SymbolInput;


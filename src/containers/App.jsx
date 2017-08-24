
// Our main container App

import React, { Component } from 'react';
//import { connect } from 'react-redux';
import SymbolInput from '../components/SymbolInput.jsx';
import classes from '../scss/iex.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.getQuoteUrl = 'http://localhost:8080/stock/fb/quote';

        this.getSymbolCb = this.getSymbolCb.bind(this);
    }

    getSymbolCb(symbol) {
        console.log('getSymbolCb ' + symbol);

        this.getSymbolAsync();
    }

    async getSymbolAsync() {
        let data = await this.getSymbol();
        console.log({data});
    }

    getSymbol() {
        return new Promise((resolve, reject) => {
            let req = new Request(this.getQuoteUrl);
            
            fetch(req).then(function(res) {
                resolve(res.json());
            });
        });
    }
    
    render() {
	return(
	    <div className="container">
	      <div className="row">
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-10">
                  <SymbolInput getSymbolCb={this.getSymbolCb} />
                </div>
	      </div>
	    </div>
	);
    }
}

export default App;


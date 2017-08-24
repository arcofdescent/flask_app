
// Our main container App

import React, { Component } from 'react';
//import { connect } from 'react-redux';
import SymbolInput from '../components/SymbolInput.jsx';
import QuoteResult from '../components/QuoteResult.jsx';
import classes from '../scss/iex.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { quote: null };
        this.getSymbolCb = this.getSymbolCb.bind(this);
    }

    getSymbolCb(symbol) {
        console.log('getSymbolCb ' + symbol);
        this.symbol = symbol;

        this.getSymbolAsync();
    }

    async getSymbolAsync() {
        let data = await this.getSymbol();
        console.log({data});

        this.setState({quote: data});
    }

    getSymbol() {
        return new Promise((resolve, reject) => {
            let quoteUrl = 'http://localhost:8080/stock/' + this.symbol + '/quote';
            let req = new Request(quoteUrl);
            
            fetch(req).then(function(res) {
                resolve(res.json());
            });
        });
    }
    
    render() {

        let quoteResult = '';
        if (this.state.quote) {
            quoteResult = <QuoteResult quote={this.state.quote} />;
        }
        
	return(
	    <div className="container">
	      <div className="row">
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-10">
                  <SymbolInput getSymbolCb={this.getSymbolCb} />
                  {quoteResult}
                </div>
	      </div>
	    </div>
	);
    }
}

export default App;



import React, { Component } from 'react';
//import { connect } from 'react-redux';

class QuoteResult extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let quote = this.props.quote;
        
	return(
            <div className="container" style={{'marginTop': 10}}>
              <h4>Quote</h4>
              <table className="table table-bordered table-sm">
                <tbody>
                <tr><th>Symbol</th><td>{quote.symbol}</td></tr>
                <tr><th>Company Name</th><td>{quote.companyName}</td></tr>
                <tr><th>Latest Price</th><td>{quote.latestPrice}</td></tr>
                <tr><th>Latest Time</th><td>{quote.latestTime}</td></tr>
                <tr><th>Latest Volume</th><td>{quote.latestVolume}</td></tr>
                </tbody>
              </table>
            </div>
	);
    }
}

export default QuoteResult;


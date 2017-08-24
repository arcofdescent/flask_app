
import React, { Component } from 'react';
//import { connect } from 'react-redux';

class SymbolInput extends Component {

    constructor(props) {
        super(props);
        this.state = { symbol: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({symbol: e.target.value});
    }
    
    handleClick() {
        // TODO validations
        
        console.log('Symbol: ' + this.state.symbol);
        this.props.getSymbolCb(this.state.symbol);
    }
    
    render() {
	return(
            <div>
              <input type="text" value={this.state.symbol}
                     onChange={this.handleChange} placeholder="Symbol" />
              <button onClick={this.handleClick}>Get Quote</button>
            </div>
	);
    }
}

export default SymbolInput;


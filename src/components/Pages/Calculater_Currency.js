import React, { Component } from 'react';
import "../HCA/Calculater.css"
import ResultComponent from '../HCA/ResultComponent';
import KeyPadComponent from '../HCA/KeyPadComponent';
import CurrencyConverter from './inc/CurrencyConverter';

class Calculater_Currency extends Component {
  state = {
    result: ""
  }

  onClick = button => {
    if(button === "=") {
      this.calculate();
    }

    else if(button === "AC") {
      this.reset();
    }

    else if(button === "CE") {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if(this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div>
        <main className="main-content">
          <section className="left-section">
           <div className='left-content'>
              <div className="calculator-body">
                <h1>Calculator</h1>
                <div className="calculator-display">
                  <ResultComponent result={this.state.result} />
                  <KeyPadComponent onClick={this.onClick} />
                </div>
              </div>
            </div>
          </section>
          <section className="left-section">
            <div className="calculator-body">
                <CurrencyConverter/>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Calculater_Currency;
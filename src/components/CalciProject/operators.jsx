import React from "react";
import { Component } from "react";

class Operators extends Component {
  render() {
    return <div>
        <div>
          <button >+</button>
        </div>
        <div>
        <button>-</button>
        </div>
        <div>
        <button >*</button>
        </div>
        <div>
        <button >/</button>
        </div>
        <div>
        <button >=</button>
        </div>
      </div>;
  }
}
export default Operators;

/**
 * <div>
        <div>
          <button onClick={this.handleOperationClick.bind(this, '+')}>+</button>
        </div>
        <div>
        <button onClick={this.handleOperationClick.bind(this, '-')}>-</button>
        </div>
        <div>
        <button onClick={this.handleOperationClick.bind(this, '*')}>*</button>
        </div>
        <div>
        <button onClick={this.handleOperationClick.bind(this, '/')}>/</button>
        </div>
        <div>
        <button onClick={this.handleOperationClick.bind(this, '=')}>=</button>
        </div>
      </div>;
 */
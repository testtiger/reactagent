import React from "react";
import { Component } from "react";

//{this.handleOperandClick.bind(this, 1)
class Numbers extends Component {
    render() {
        return <div>
            <div>
              <button >
                1
              </button>
              <button >
                2
              </button>
              <button >
                3
              </button>
            </div>
            <div>
              <button >
                4
              </button>
              <button>
               5
              </button>
                <button >6</button>
            </div>
            <div>
                <button >7</button>
                <button >8</button>
                <button >9</button>
            </div>
            <div>
                <button >0</button>
            </div>
          </div>;
    }
}

export default Numbers;
/**
 *  <div>
              <button onClick={this.handleOperandClick.bind(this, 1)}>
                1
              </button>
              <button onClick={this.handleOperandClick.bind(this, 2)}>
                2
              </button>
              <button onClick={this.handleOperandClick.bind(this, 3)}>
                3
              </button>
            </div>
            <div>
              <button onClick={this.handleOperandClick.bind(this, 4)}>
                4
              </button>
              <button>
                onClick=
                {this.handleOperandClick.bind(this, 5)}5
              </button>
                <button onClick={this.handleOperandClick.bind(this, 6)}>6</button>
            </div>
            <div>
                <button onClick={this.handleOperandClick.bind(this, 7)}>7</button>
                <button onClick={this.handleOperandClick.bind(this, 8)}>8</button>
                <button onClick={this.handleOperandClick.bind(this, 9)}>9</button>
            </div>
            <div>
                <button onClick={this.handleOperandClick.bind(this, 0)}>0</button>
            </div>
          </div>;
 */
import React from 'react';
import {Component} from './lib/component'

@Component
export class Counter extends React.Component {
  count: number = 0

  increment () {
    this.count += 1
  }

  get doubled () {
    return this.count * 2
  }

  render() {
    return (
      <div>
        count: {this.count}
        <br />
        double: {this.doubled}
        <br />
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

// OLD WAY...

// export class CounterWithNoDecorator extends React.Component<{}, {count: number}> {
  
//   constructor(props) {
//     super(props)
//     this.increment = this.increment.bind(this)
//     this.state = {count: 0}
//   }

//   increment () {
//     this.setState({count: this.state.count + 1})
//   }

//   get doubled () {
//     return this.state.count * 2
//   }

//   render() {
//     return (
//       <div>
//         count: {this.state.count}
//         <br />
//         double: {this.doubled}
//         <br />
//         <button onClick={this.increment}>increment</button>
//       </div>
//     );
//   }
// }
import React from 'react';

export class CounterWithNoDecorator extends React.Component<{msg?: string}, {count: number}> {
  
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.state = {count: 0}
  }

  increment () {
    this.setState({count: this.state.count + 1})
  }

  get doubled () {
    return this.state.count * 2
  }

  render() {
    return (
      <div>
        Hello {this.props.msg || 'no one'}
        <br />
        count: {this.state.count}
        <br />
        double: {this.doubled}
        <br />
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
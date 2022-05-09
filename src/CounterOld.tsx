import React from 'react';

export class CounterWithNoDecorator extends React.Component<{msg?: string}, {count: number, changeLog: string}> {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.state = {count: 0, changeLog: ''}
  }

  static defaultProps = {
    msg: 'nobody'
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState({changeLog: `Count was changed from ${prevState.count} to ${this.state.count}`})
    }
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
        Hello {this.props.msg}
        <br />
        count: {this.state.count}
        <br />
        double: {this.doubled}
        <br />
        <button onClick={this.increment}>increment</button>
        <br />
        {this.state.changeLog}        
      </div>
    )
  }
}

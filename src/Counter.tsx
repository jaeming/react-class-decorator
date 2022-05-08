import React from 'react';
import { Component, Prop } from './lib/component'

@Component
export class Counter extends React.Component<{msg?: string}> {
  @Prop({ default: 'nobody :(' }) msg!: string

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
        Hello {this.msg}
        <br />
        count: {this.count}
        <br />
        double: {this.doubled}
        <br />
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

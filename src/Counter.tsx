import React from 'react';
import { Component, Prop, Watch } from './lib/component'

@Component
export class Counter extends React.Component<{msg?: string}> {
  @Prop({ default: 'nobody' }) msg!: string

  count: number = 0
  changeLog: string = ''

  @Watch('count')
  onCountChange(val, oldVal) {
    this.changeLog = `Count was changed from ${oldVal} to ${val}`
  }

  increment () {
    this.count += 1
  }

  get doubled () {
    return this.count * 2
  }

  render = () =>
  <div>
    Hello {this.msg}
    <br />
    count: {this.count}
    <br />
    double: {this.doubled}
    <br />
    <button onClick={this.increment}>increment</button>
    <br />
    {this.changeLog}
  </div>
}

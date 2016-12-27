import React, { Component } from 'react';
import '../App.css';

export default class Beautiful extends Component {
  constructor(props){
    super(props)

    // set initial state
    this.state = {
      text: "",
      sayBeautiful: "❤️"
    }
  }

  // handle input state change
  handleOnChange(event) {
    event.preventDefault();
    this.setState({
      text: event.target.value
    })
  }

  // handle submit, set sayBeautiful, and reset input text
  handleOnSubmit(event) {
    event.preventDefault();
    this.setState({sayBeautiful: `you're beautiful, ${this.state.text}`, text: ""})
  }

  render() {
    return (
      <div className="beautiful">
        <h2>what is your name?</h2>

        {/* form for user to enter name */}
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input type="text" onChange={this.handleOnChange.bind(this)} value={this.state.text} />
          {' '}{' '}
          <button className="btn">submit</button>
        </form>

        {/* initial state is a heart, and where the "you're beautiful" will show up */}
        <div className="response">{this.state.sayBeautiful}</div>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class Beautiful extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: "",
      sayBeautiful: ""
    }
  }

  handleOnChange(event) {
    event.preventDefault();
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.setState({sayBeautiful: `you're beautiful, ${this.state.text}`})
  }

  render() {

    return (
      <div>
        <h1>What is your name?</h1>

        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input type="text" onChange={this.handleOnChange.bind(this)} />
          <button>Submit</button>
        </form>

        {this.state.sayBeautiful}
      </div>
    )
  }
}

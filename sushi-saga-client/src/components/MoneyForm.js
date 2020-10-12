import React from "react";

export default class MoneyForm extends React.Component {

  submitHandler = (e) => {
    e.preventDefault()
    this.props.addMoney(parseInt(e.target.money.value, 10))
    e.target.money.value = ''
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <label htmlFor="money">Add Money:</label>
        <input type="text" id="money" name="money" />
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
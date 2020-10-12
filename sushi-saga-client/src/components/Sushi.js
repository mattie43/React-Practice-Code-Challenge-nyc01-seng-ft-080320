import React from "react";

export default class Sushi extends React.Component {

  state = {
    eaten: false
  }

  onClickHandler = (e) => {
    if(e.target.parentElement.parentElement.childNodes[1].innerText.slice(-2) < this.props.currentMoney){
      this.setState({eaten: true})
      this.props.removeMoney(e.target.parentElement.parentElement.childNodes[1].innerText.slice(-2))
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.onClickHandler}>
          {this.state.eaten ? null : <img src={this.props.sushi.img_url} alt="" width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

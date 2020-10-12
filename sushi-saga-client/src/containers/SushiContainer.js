import React from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

export default class SushiContainer extends React.Component {
  
  state = {
    sushiList: [],
    sushiCount: 0
  }

  renderSushis = () => {
    const fourItems = this.state.sushiList.slice(this.state.sushiCount,this.state.sushiCount + 4)
    return fourItems.map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} removeMoney={this.props.removeMoney} currentMoney={this.props.currentMoney}/>)
  }

  addMoreSushi = () => {
    this.state.sushiCount > 95 ? this.setState({sushiCount: 0}) : this.setState({sushiCount: this.state.sushiCount + 4})
  }

  componentDidMount() {
    fetch('http://localhost:3000/sushis')
      .then(resp => resp.json())
      .then(data => this.setState({sushiList: data}))
  }

  render() {
    return (
      <React.Fragment>
        <div className="belt">
          {this.renderSushis()}
          <MoreButton addMore={this.addMoreSushi}/>
        </div>
      </React.Fragment>
    );
  }
}

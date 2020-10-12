import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

class App extends Component {

  state ={
    plateCount: [],
    money: 100
  }

  addMoney = (amount) => {
    this.setState({money: this.state.money + amount})
  }

  removeMoney = (amount) => {
    this.setState({money: this.state.money - amount})
    this.addPlate()
  }

  addPlate = () => {
    this.setState({plateCount: [...this.state.plateCount, 'plate']})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer removeMoney={this.removeMoney} currentMoney={this.state.money}/>
        <Table plateCount={this.state.plateCount} currentMoney={this.state.money} addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;
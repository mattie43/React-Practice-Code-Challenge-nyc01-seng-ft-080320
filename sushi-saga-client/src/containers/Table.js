import React, { Fragment } from 'react'
import MoneyForm from '../components/MoneyForm'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.currentMoney} remaining!
      </h1>
      <div className="table">
      <MoneyForm addMoney={props.addMoney}/>
        <div className="stack">
          {renderPlates(props.plateCount)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
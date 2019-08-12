import React from 'react'
import RobotDetails from './RobotDetails'

const Robot = ({ index, robot, onSelect, selected }) => (
  <div className="robot-list__element">
    <div className="robot-list__element__name">
      <h2>{robot.name}</h2>
      <button onClick={event => {
        event.preventDefault()
        onSelect(index)
      }}>{ selected ?
        'Close ' :
        'Details'
      }</button>
  </div>
      { selected && (
        <RobotDetails robot={robot} />
      ) }
  </div>
)

export default Robot

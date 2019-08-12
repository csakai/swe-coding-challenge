import React, { Component }  from 'react'
import Robot from './Robot'

class RobotList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detailsIndex: null
    }
    this.toggleDetailView = this.toggleDetailView.bind(this)
  }

  toggleDetailView(index) {
    this.setState(prevState => {
      let detailsIndex
      if (prevState.detailsIndex === index) {
        detailsIndex = null
      } else {
        detailsIndex = index
      }
      return {
        detailsIndex
      }
    })
  }

  render() {
    const {
      robotList
    } = this.props
    const {
      detailsIndex
    } = this.state
    return (
      <div className="robot-list">
        <h1>Robot List</h1>
        <div className="robot-list__container">
          { robotList.map((robot, index) => (
            <Robot
              robot={robot}
              index={index}
              key={index}
              selected={index === detailsIndex}
              onSelect={this.toggleDetailView}
            />
          ))}
        </div>
      </div>
    )
  }
}


export default RobotList

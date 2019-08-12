import React from 'react'

const RobotDetails = ({ robot }) => (
  <div className="RobotDetails">
    <ul>
      <li>IP: {robot.ip}</li>
      <li>API Version: {robot.health.api_version}</li>
      <li>Firmware Version: {robot.health.fw_version}</li>
      <li>System Version: {robot.health.system_version}</li>
    </ul>
  </div>
)

export default RobotDetails

import { connect } from 'react-redux'
import RobotList from './RobotList'

const mapStateToProps = (state, props) => ({
  robotList: state.robots,
})

export default connect(mapStateToProps)(RobotList)

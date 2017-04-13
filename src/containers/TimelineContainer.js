import React, { Component, PropTypes } from 'react'
import Timeline from '../components/Timeline'

class TimelineContainer extends Component {
  static propTypes = {

  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Timeline />
    )
  }
}

export default TimelineContainer

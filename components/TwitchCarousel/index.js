import React from 'react'
import PropTypes from 'prop-types'
import TwitchPlayer from '../TwitchPlayer'

import './styles.scss'

class TwitchCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { render: false }
    this.renderChildren = this.renderChildren.bind(this)
  }

  renderChildren () {
    return React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        active: index===2
      })
    })
  }

  componentDidMount (props) {
    this.setState({ render: true })
  }

  render () {
    return <div className='ga-twitch-carousel'>
      {this.renderChildren()}
    </div>
  }
}
TwitchCarousel.propTypes = {
  children: PropTypes.array
}

export default TwitchCarousel

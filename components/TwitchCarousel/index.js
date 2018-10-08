import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'

import './styles.scss'
import TwitchPlayer from '../TwitchPlayer'

class TwitchCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { current: 0, items: [] }
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  buildList () {
    let channelList = []
    for (let i = 0; i < 7; i++) {
      if (this.state.current >= 0) {
        channelList.push(this.props.channelList[(i + this.state.current) % this.props.channelList.length])
      } else {
        channelList.push(this.props.channelList[(this.props.channelList.length + (this.state.current % this.props.channelList.length) + i) % this.props.channelList.length])
      }
    }
    return channelList.map((channel, index) => {
      return <div onClick={this.handleItemClick} key={`item-${index + this.state.current}`} className={`ga-twitch-carousel-player-item item-${index}`}>
        <TwitchPlayer active={index === 3} index={index} img={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${channel}-640x360.jpg`} channel={channel} />
      </div>
    })
  }

  handleNextClick () {
    this.setState({ current: this.state.current + 1 })
  }
  handlePreviousClick () {
    this.setState({ current: this.state.current - 1 })
  }

  handleItemClick (e) {
    const current = this.state.current + (e.target.getAttribute('data-index') - 3)

    this.setState({ current: current })
  }
  render () {
    return <div className='ga-twitch-carousel' >
      <div className='ga-twitch-carousel-content'>
        {this.buildList()}
        <div className='next' onClick={this.handleNextClick}><i className='fas fa-angle-right' /></div>
        <div className='previous' onClick={this.handlePreviousClick}><i className='fas fa-angle-left' /></div>
      </div>
     
    </div>
  }
}
TwitchCarousel.propTypes = {
  channelList: PropTypes.array
}

export default TwitchCarousel

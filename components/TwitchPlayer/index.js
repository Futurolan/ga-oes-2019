import React from 'react'
import PropTypes from 'prop-types'

class TwitchPlayer extends React.Component {
  render () {
    if (this.props.active) {
      return <div className='twitch-player'>
        <iframe
          src={`https://player.twitch.tv/?channel=${this.props.channel}`}
          frameBorder='none'
          scrolling='no'
          allowFullScreen />
      </div>
    } else {
      return <div className='twitch-player'>
        <img src={this.props.img} />
      </div>
    }
  }
}

TwitchPlayer.propTypes = {
  channel: PropTypes.string,
  img: PropTypes.string,
  active: PropTypes.bool
}

export default TwitchPlayer

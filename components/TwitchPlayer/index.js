import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

class TwitchPlayer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { animationEnded: false }
  }

  componentDidMount () {
    if (this.props.active) { this.setState({ animationEnded: true }) }
  }
  componentDidUpdate (prevProps, prevState) {
    if (!prevProps.active) {
      if (prevProps.active !== this.props.active) {
        setTimeout(() => {
          this.setState({ animationEnded: true })
        }, 450)
      }
    } else {
      if (prevProps.active !== this.props.active) {
        this.setState({ animationEnded: false })
      }
    }
  }

  render () {
    if (this.props.active && this.state.animationEnded) {
      return <div data-index={this.props.index} className={`ga-twitch-player ${this.props.active?'enable':'disable'}`} style={{ background: `url('${this.props.img}) no-repeat center center` }}>
        <iframe
          src={`https://player.twitch.tv/?channel=${this.props.channel}`}
          frameBorder='none'
          scrolling='no'
          width='640px'
          height='360px'
          allowFullScreen />
      </div>
    } else {
      return <div data-index={this.props.index} className={`ga-twitch-player ${this.props.active?'enable':'disable'}`} style={{ background: `url('${this.props.img}) no-repeat center center` }}>

        <p>
          <b>{this.props.channel}</b>
        </p>
      </div>
    }
  }
}

TwitchPlayer.propTypes = {
  channel: PropTypes.string,
  img: PropTypes.string,
  active: PropTypes.bool,
  index: PropTypes.number
}

export default TwitchPlayer

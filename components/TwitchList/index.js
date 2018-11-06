import React from 'react'
import io from 'socket.io-client'
import './styles.scss'

class TwitchList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { socket: null }
  }

  componentDidMount () {
    // connect to WS server and listen event
    const socket = io('http://localhost:8000')
    socket.on('channelName', (message) => { console.log(message) })
    this.setState({ socket })
  }

  // close socket connection
  componentWillUnmount () {
    this.state.socket.close()
  }

  render () {
    return (
      <section className='ga-twitch-list section' >
        <div className='container'>
          <div className='columns'>
            <div className='column is-8'>
              <div className='box'>
              Player ici
              </div>
            </div>
            <div className='column is-4'>
              <div className='box'>
                <div className='media'>
                  <div className='media-left'>
                    <figure className='image '>

                      <img src='https://static-cdn.jtvnw.net/previews-ttv/live_user_w_lapin-160x90.jpg' />
                    </figure>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                    SC2 - w_lapin test baba
                      </p>
                    </div>
                  </div>
                  <div className='media-right'>
                    <div className='is-online' />
                  </div>
                </div>
                <div className='media'>
                  <div className='media-left'>
                    <figure className='image '>

                      <img src='https://static-cdn.jtvnw.net/previews-ttv/live_user_sco-160x90.jpg' />
                    </figure>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                    World of Warcraft - SCO
                      </p>
                    </div>
                  </div>
                  <div className='media-right'>
                    <div className='is-offline' />
                  </div>
                </div>
                <div className='media'>
                  <div className='media-left'>
                    <figure className='image '>

                      <img src='https://static-cdn.jtvnw.net/previews-ttv/live_user_drdisrespectlive-160x90.jpg' />
                    </figure>
                  </div>
                  <div className='media-content'>
                    <div className='content'>
                      <p>
                    PUBG - drdisrespectlive
                      </p>
                    </div>
                  </div>
                  <div className='media-right'>
                    <div className='is-online' />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TwitchList

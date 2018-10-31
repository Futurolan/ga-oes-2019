import React from 'react'

import './styles.scss'

class TwitchList extends React.Component {
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

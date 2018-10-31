import React from 'react'
import ErrorPage from 'next/error'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import TwitchList from 'components/TwitchList'

import config from 'config/config'

import '../styles/styles.scss'

class LivePage extends React.Component {
  render () {
    if (config.live.active !== true) {
      return <ErrorPage statusCode={404} />
    }

    return (
      <Layout name='live-page has-bg-star'>
        <div className='section'>
          <Meta title={config.live.title} description={config.live.description} />
          <TwitchList />
          <p>
            On récupère les stream en ligne via socket.io (url spécifique) et on met à jour via socket.io toujours :)<br />
            Sur le backoffice on gère un type de contenu streamList (Edition + Streams*)<br />
            On a un soft qui update régulièrement l'api Twitch pour maintenir l'état des streams <br /> Quand l'état d'un des streams change on dispatch à tous les clients.
          </p>
        </div>
      </Layout>

    )
  }
}

export default LivePage

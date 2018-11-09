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
          <div className='container'>
            <h1 className='title title-line has-text-centered'><span>{config.live.title}</span></h1>
            <TwitchList />
          </div>
        </div>
      </Layout>

    )
  }
}

export default LivePage

import React from 'react'

import Layout from 'components/Layout'
import ExhibitorsList from 'components/ExhibitorsList'
import Meta from 'components/Meta'

import config from 'config/config'

class ExhibitorsPage extends React.Component {
  render () {
    return (
      <Layout name='exhibitors-page has-bg-star'>
        <section className='section has-bg-star'>
          <Meta title={config.exhibitors.title} description={config.exhibitors.description} />
          <div className='container'>
            <h1 className='title title-line has-text-centered'><span>{config.exhibitors.title}</span></h1>
            <ExhibitorsList />
          </div>
        </section>
      </Layout>
    )
  }
}

export default ExhibitorsPage

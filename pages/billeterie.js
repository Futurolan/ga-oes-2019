import React from 'react'
import Layout from 'components/Layout'
import '../styles/styles.scss'
import TicketContent from '../components/TicketContent'
import Meta from '../components/Meta'
import config from '../lib/config'

class BilleteriePage extends React.Component {
  render () {
    return (
      <Layout name='billeterie-page has-bg-star'>
        <Meta title={config.tickets.title} description={config.tickets.description} />
        <section className='section'>
          <div className='container'>
            <TicketContent />
          </div>
        </section>
      </Layout>
    )
  }
}

export default BilleteriePage

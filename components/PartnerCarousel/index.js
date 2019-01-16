import React from 'react'
import PropTypes from 'prop-types'
import PartnerLogo from '../PartnerLogo'

class PartnerCarousel extends React.Component {
  componentDidMount () {
    if (this.props.partners.length > 0 && this.props.partners.length > 2) {
      console.log('ANIMATE THIS !!!')
    }
  }

  render () {
    const { partners } = this.props
    return <div className='ga-partner-carousel columns is-vcentered is-centered'>
      {partners.map((partner) => {
        return <div key={partner.nid} className='column is-2'>
          <PartnerLogo title={partner.title} imageUrl={partner.image.derivative.url} url={partner.url} />
        </div>
      })}
    </div>
  }
}

PartnerCarousel.propTypes = {
  partners: PropTypes.array
}

export default PartnerCarousel

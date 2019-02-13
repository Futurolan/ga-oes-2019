import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

class WeezeventIframe extends React.Component {
  componentDidMount () {
    const script = document.createElement('script')
    script.src = 'https://www.weezevent.com/js/widget/min/widget.min.js'
    document.body.appendChild(script)
  }

  render () {
    return <div className='ga-weezevent-iframe has-text-centered'><div dangerouslySetInnerHTML={{ __html: `
      <a title="Logiciel billetterie en ligne" href="https://www.weezevent.com/?c=sys_widget" class="weezevent-widget-integration" target="_blank" data-src="${this.props.url}" data-width="650" data-height="1200" data-id="${this.props.id}" data-resize="1" data-width_auto="1" data-noscroll="0" data-nopb="0">Chargement de la billetterie Weezevent</a>
      ` }} /><a target='_blank' href={this.props.url}>Ouvrir la billetterie dans un nouvel onglet</a>
    </div>
  }
}

WeezeventIframe.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string
}
export default WeezeventIframe

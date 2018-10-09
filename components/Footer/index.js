import React from 'react'

import ActiveLink from '../ActiveLink'

import './styles.scss'
import config from '../../config/config'

class Footer extends React.Component {
  render () {
    return (
      <footer className='footer ga-footer has-background-dark has-text-white'>
        <div className='container'>
          <div className='content ga-footer-links has-text-centered'>
            {config.contact.active && <ActiveLink className='has-text-white' label='Contacts' path='/contacts' />}
            {config.press.active && <ActiveLink className='has-text-white' label='Accreditation Presse' path='/espace-presse' />}
            {config.legals.active && <ActiveLink className='has-text-white' label='Mentions Légales ' path='/mentions-legales' />}
            {config.recruit.active && <ActiveLink className='has-text-white' label='Recrutement' path='/recrutement' />}

          </div>
          {config.social && <div className='content ga-footer-socials has-text-centered'>
            {config.social.facebook && <a className='control has-text-white' target='_blank' href={config.social.facebook}>
              <i className='fab fa-facebook' />
            </a>}
            {config.social.twitter && <a className='control has-text-white' target='_blank' href={config.social.twitter}>
              <i className='fab fa-twitter' />
            </a>}
            {config.social.flickr && <a className='control has-text-white' target='_blank' href={config.social.flickr}>
              <i className='fab fa-flickr' />
            </a>}
            {config.social.twitch && <a className='control has-text-white' target='_blank' href={config.social.twitch}>
              <i className='fab fa-twitch' />
            </a>}
            {config.social.youtube && <a className='control has-text-white' target='_blank' href={config.social.youtube}>
              <i className='fab fa-youtube' />
            </a>}
          </div>}

        </div>
      </footer>
    )
  }
}

export default Footer

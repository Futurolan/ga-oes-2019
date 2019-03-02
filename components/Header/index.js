import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import ActiveLink from 'components/ActiveLink'
import TicketMenu from 'components/TicketMenu'
import LiveMenu from 'components/LiveMenu'
import SocialNetworksLinks from 'components/SocialNetworksLinks'

import config from 'config/config'
import menu from 'config/menu'

import './styles.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isOpen: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  generateDropDown (component, item, index) {
    return <div key={index} className='navbar-item has-dropdown is-hoverable'>
      {component}
      <div className='navbar-dropdown'>
        {item.children.map((item, index) => {
          return this.generateMenuItem(item, index)
        })}
      </div>
    </div>
  }
  generateMenuItem (item, index) {
    if (item.type === undefined) return null

    if (item.type === 'config') {
      if (item.id === undefined) return null

      if (item.id === 'news') {
        if (item.children) {
          return this.generateDropDown(<ActiveLink label={config.news.title} className='navbar-link has-text-white is-uppercase has-text-weight-bold' path='/news' />, item, index)
        } else {
          return <ActiveLink key={index} label={config.news.title} className='navbar-item has-text-white is-uppercase has-text-weight-bold' path='/news' />
        }
      }
      if (item.id === 'live') {
        if (item.children) {
          return this.generateDropDown(<LiveMenu className='navbar-link has-text-white is-uppercase has-text-weight-bold' />, item, index)
        } else {
          return <LiveMenu key={index} className='navbar-item has-text-white is-uppercase has-text-weight-bold' />
        }
      }
      if (item.id === 'tickets') {
        if (item.children) {
          return this.generateDropDown(<TicketMenu className='navbar-link has-text-white is-uppercase has-text-weight-bold' />, item, index)
        } else {
          return <TicketMenu key={index} className='navbar-item has-text-white is-uppercase has-text-weight-bold' />
        }
      }
      if (item.id === 'tournaments') {
        if (item.children) {
          return this.generateDropDown(<ActiveLink label={config.tournaments.title} className='navbar-link has-text-white is-uppercase has-text-weight-bold' path='/tournois' />, item, index)
        } else {
          return <ActiveLink key={index} label={config.tournaments.title} className='navbar-item has-text-white is-uppercase has-text-weight-bold' path='/tournois' />
        }
      }
      if (item.id === 'info') {
        if (item.children) {
          return this.generateDropDown(<ActiveLink label={config.info.title} className='navbar-link has-text-white is-uppercase has-text-weight-bold' path='/infos' />, item, index)
        } else {
          return <ActiveLink key={index} label={config.info.title} className='navbar-item has-text-white is-uppercase has-text-weight-bold' path='/infos' />
        }
      }
      if (item.id === 'partners') {
        if (item.children) {
          return this.generateDropDown(<ActiveLink label={config.partners.title} className='navbar-link has-text-white is-uppercase has-text-weight-bold' path='/partenaires' />, item, index)
        } else {
          return <ActiveLink key={index} label={config.partners.title} className='navbar-item has-text-white is-uppercase has-text-weight-bold' path='/partenaires' />
        }
      }

      return null
    }

    if (item.type === 'page') {
      if (item.link === undefined || item.id === undefined || item.title === undefined) return null
      if (item.children) {
        return this.generateDropDown(<ActiveLink label={item.title} className='navbar-link has-text-white is-uppercase has-text-weight-bold' path={item.link} />, item, index)
      } else {
        return <ActiveLink key={index} label={item.title} className='navbar-item has-text-white is-uppercase has-text-weight-bold' path={item.link} />
      }
    }

    return null
  }
  render () {
    return (
      <header className='ga-header'>
        <nav className='navbar has-background-primary'>
          <div className='navbar-brand'>
            <Link href='/'>
              <a>
                <img alt={`Logo de l'évènement ${config.title}`} src={config.logo} />
              </a>
            </Link>
            <button className='button navbar-burger is-dark' onClick={this.toggleMenu}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className={classNames('navbar-menu', 'has-background-primary', 'has-text-centered', { 'is-active': this.state.isOpen })} >
            <div className='navbar-start' />
            {menu.map((item, index) => {
              return this.generateMenuItem(item, index)
            })}

            <div className='navbar-end'>
              {config.mainPartner && <a href={config.mainPartner.url} target='_blank'>
                <img alt={'Logo du partenaire principal de l\'évènement'} src={config.mainPartner.logo} />
              </a>}
              {config.mainPartner === undefined && config.social && <div className='navbar-item'>
                <SocialNetworksLinks />
              </div>}
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header

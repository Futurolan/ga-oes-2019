import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import getConfig from 'next/config'

import WeezeventIframe from 'components/WeezeventIframe'

import config from 'config/config'

import './styles.scss'

const { publicRuntimeConfig } = getConfig()

function TicketContent ({ data: { loading, error, node } }) {
  if (error) {
    return <div className='notification is-danger'>Une erreur est survenue pendant le chargement de la billetterie
      !!!</div>
  }

  if (node && node.url && node.weezeventId) {
    return <div className='ga-ticket-content '>
      <h1 className='title title-line has-text-centered'><span>{config.tickets.title}</span></h1>
      <div className='columns is-multiline'>
        <div className='column is-12 is-8-desktop'>
          <div className='box '>
            <WeezeventIframe id={node.weezeventId} url={node.url} />
          </div>
        </div>
        <div className='column is-12 is-4-desktop'>
          {node.url2 && <div className='box content'>
            <h2 className='title is-size-5'>Pass "Manager/Accompagnateur"</h2>
            <p>
              Pour obtenir des pass "Manager/Accompagnateur", les équipes inscrites aux tournois peuvent réaliser une demande via le lien ci-dessous.
            </p>
            <div className='has-text-centered'>
              <a target='_blank' href={node.url2}><button className='button is-primary is-fullwidth'>Obtenir un pass</button></a>
            </div>
          </div>}
          {node.minor && <div className='box content'>
            <h2 className='title is-size-5'>Informations pour les mineurs</h2>
            <p>
              Vous devez télécharger l'autorisation parentale, l'imprimer, la remplir et l'apporter le jour de votre venue avec votre billet.
            </p>
            <div className='has-text-centered'>
              <a target='_blank' href={node.minor.file.url}><button className='button is-primary is-fullwidth'>Télécharger l'autorisation parentale (format pdf)</button></a>
            </div>
          </div>}
          {node.rules && <div className='box content'>
            <h2 className='title is-size-5'>Règlement intérieur</h2>
            <p>
            L'acquisition d'un ticket entraîne l'adhésion au règlement intérieur disponible ci-dessous.
            </p>
            <div className='has-text-centered'>
              <a target='_blank' href={node.rules.file.url}><button className='button is-primary is-fullwidth'>Télécharger le règlement intérieur (format pdf)</button></a>
            </div>
          </div>}
        </div>
      </div>
    </div>
  }
  return <div className='notification'>Chargement de la billetterie en cours.</div>
}

export const edition = gql`
query{
  node:nodeById(id:"${publicRuntimeConfig.EDITION_ID}") {
    ... on NodeEdition {
      url:fieldEditionWeezeventUrl
      url2:fieldEditionWeezeventUrl2
      weezeventId:fieldEditionWeezeventEventId
      rules:fieldEditionRules{
        file:entity{
          url
        }
      }
      minor:fieldEditionMinorsRules{
        file:entity{
          url
        }
      }
    }
  }
}
`

TicketContent.propTypes = {
  data: PropTypes.object
}

export default graphql(edition)(TicketContent)

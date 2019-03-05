import React from 'react'

import './styles.scss'

class ExhibitorsList extends React.Component {
  render () {
    return (
      <div className='exhibitors-list'>
        <div className='box'>
          <div className='columns'>
            <div className='column is-3 is-3-tablet'>
              <div className='has-text-centered'>
                <img src='https://backoffice.gamers-assembly.net/sites/default/files/styles/partner_150x150/public/partner/grand_poitiers_2.png?itok=OobfVUiE' />
                <a className='button is-primary is-fullwidth' href='https://bmagic.fr'>Site web</a>
              </div>
            </div>
            <div className='column is-9'>
              <div className='description'>
                <h2 className='title is-5 is-marginless'>Lenovo</h2>
                <div className='has-text-grey is-italic'><i className='fas fa-map-marker-alt' /> Arènes - Village partenaires</div>
                <div className='content'>
                  Lenovo vous présente sa gamme de PC Lenovo Legion, armez vous de votre sabre laser pour les Star Wars Jedi Challenges ainsi que de tournois esportifs.
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className='box'>
          <div className='columns'>
            <div className='column is-3 is-3-tablet'>
              <div className='has-text-centered'>
                <img src='https://backoffice.gamers-assembly.net/sites/default/files/styles/partner_150x150/public/partner/Ubisoft.png?itok=5f47iWmc' />
                <a className='button is-primary is-fullwidth' href='https://bmagic.fr'>Site web</a>
              </div>
            </div>
            <div className='column is-9'>
              <div className='description'>
                <h2 className='title is-5 is-marginless'>Materiel.net</h2>
                <div className='has-text-grey is-italic'><i className='fas fa-map-marker-alt' /> Arènes - Village partenaires</div>
                <div className='content'>
                  Retrouvez une exposition de PC Materiel.net, des animations de montage PC ainsi qu'un Zone 100% Gaming avec un truc bien long
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default ExhibitorsList

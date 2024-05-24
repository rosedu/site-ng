import React, { Component } from 'react'

import Title from 'components/common/Title'
import ButtonLink from 'components/common/ButtonLink'

import Text from './text_translations'
import './index.scss'

class Sponsorship extends Component {
  static propTypes = {}
  static defaultProps = {
    lang: 'ro'
  }

  render () {
    return (
      <div className='Sponsorship'>
        <Title text={Text['title'][this.props.lang]} color='white' />
        <div className='content'>
          <p className='content_text'>{Text['paragraph'][this.props.lang]}</p>
        </div>
        <div className='boxes'>
          <div className='box'>
            <h2>{Text['volunteer_title'][this.props.lang]}</h2>
            <p>{Text['volunteer_content'][this.props.lang]}</p>
            <ButtonLink primary={true} target={'#contact'}>
              {Text['volunteer_button'][this.props.lang]}
            </ButtonLink>
          </div>
          <div className='box'>
            <h2>{Text['bank_title'][this.props.lang]}</h2>
            <p>{Text['bank_content'][this.props.lang]}</p>
            <h3>RO98BTRL04501205R50291XX</h3>
          </div>
          <div className='box'>
            <h2>{Text['sponsorship_title'][this.props.lang]}</h2>
            <p>{Text['sponsorship_content'][this.props.lang]}</p>
            <ButtonLink primary={true} target={'#contact'}>
              {Text['sponsorship_button'][this.props.lang]}
            </ButtonLink>
          </div>
          <div className='box'>
            <h2>{Text['tax_redirect_title'][this.props.lang]}</h2>
            <p>{Text['tax_redirect_content'][this.props.lang]}</p>
            <ButtonLink
              primary={true}
              target={'https://formular230.ro/asociatia-rosedu'}
            >
              {Text['tax_redirect_button'][this.props.lang]}
            </ButtonLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Sponsorship

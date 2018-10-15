import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'
import Text from './text_translations'

import Title from 'components/common/Title'
import ButtonLink from 'components/common/ButtonLink'
import Project from 'components/common/Project'

/**
 * Projects section component
 */
class Projects extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
  }
  static defaultProps = {
    projects: [],
    lang: 'ro'
  }

  render () {
    const {
      props: { projects }
    } = this

    return (
      <div className='Projects'>
        <Title text={Text['title'][this.props.lang]} color='black' />

        <div className='content'>
          <div className='text'>
            <div className='text_content'>
              <p>{Text['paragraph_1'][this.props.lang]}</p>
              <p>{Text['paragraph_2'][this.props.lang]}</p>
            </div>
            <ButtonLink target={'#contact'} primary={true}>
              {Text['button_message'][this.props.lang]}
            </ButtonLink>
          </div>
          <div className='list' style={{ marginLeft: '70px' }}>
            {projects.map((x, i) => <Project key={i} {...x} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

import Title from 'components/common/Title'
import Button from 'components/common/Button'
import Project from 'components/common/Project'

/**
 * Projects section component
 */
class Projects extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
  }
  static defaultProps = {
    projects: []
  }

  render () {
    const {
      props: { projects }
    } = this

    return (
      <div className='Projects'>
        <Title text='proiecte' color='#fff' />

        <div className='content'>
          <div className='text'>
            <div className='text_content'>
              <p>
                Fiind o comunitate de oameni carora le place sa stie cat mai
                multe, proiectele noastre acopera multe arii din domeniul IT.
                Daca doresti sa participi la proiectele noastre te asteptam sa
                ne contactezi si sa ne cunoastem.
              </p>
              <p>
                In cazul in care ți-ar plăcea mai mult să ajuți la partea
                organizatorică și ai experiența cu lucruri precum Linux,
                programare funcțională, programare orientată pe obiecte,
                proiecte Open Source și ești dornic să o trimiți mai departe, te
                așteptăm să ne ajuți să îmbunătățim împreună educația.
              </p>
            </div>
            <Button> Vrei să te implici ? </Button>
          </div>
          <div className='list'>
            {projects.map((x, i) => <Project key={i} {...x} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects

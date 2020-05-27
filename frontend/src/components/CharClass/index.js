import React from 'react'
import PropTypes, { object } from 'prop-types'

import { Container, ClassInput, ClassValueInput } from './styles'

export default function CharClass({ classes }) {
  return (
    <Container>
      <ul>
        {classes.map(item => (
          <li key={Math.random()}>
            <ClassInput defaultValue={item.name} />
            <ClassValueInput defaultValue={item.level} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

CharClass.propTypes = {
  classes: PropTypes.arrayOf(object).isRequired,
}

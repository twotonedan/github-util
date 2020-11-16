import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from "react-router-dom"

export const Wrapper = styled.button`
  margin-top: 16px;
  margin-left: 4px;
  background: #f0f0f0;
  border: 1px solid black;
  border-radius: 3px;
  a {
    text-decoration: none;
    font-size: 18px;
  }
`

const LinkButton = ({to}) =>
  <Wrapper>
    <Link to={to}>Back</Link>
  </Wrapper>

LinkButton.propTypes = {
  to: PropTypes.string
}

export default LinkButton
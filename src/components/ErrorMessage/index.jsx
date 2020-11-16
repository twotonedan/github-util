import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  h1 {
    color: #e81c1c;
    margin: 10px;
  }
`

const ErrorMessage = ({error}) =>
  <Wrapper>
    <h1>Error: {error}</h1>
  </Wrapper>

ErrorMessage.propTypes = {
  error: PropTypes.string
}

export default ErrorMessage
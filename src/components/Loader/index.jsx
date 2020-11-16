import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const Wrapper = styled.div`
  display: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  & div {
    margin: 40vh auto;
  }
`

const StyledLoader = () =>
  <Wrapper>
    <Loader
      type="Circles"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={30000}
    />
  </Wrapper>

export default StyledLoader
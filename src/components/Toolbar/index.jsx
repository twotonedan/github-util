import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'

export const Wrapper = styled.div`
  margin: 0 16px;
  position: relative;
`
export const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 3px 3px 0;
  border: 1px solid black;
  & svg {
    font-size: 1.9rem;
  }
`
export const Styledinput = styled.input`
  position: absolute;
  top: 0;
  right: 42px;
  font-size: 24px;
  padding: 4px 4px 4px 24px;
  border-radius: 3px 0 0 3px;
  border: 1px solid black;
`

const Toolbar = ({updateSearchParam}) => {
  const [searchParam, setSearchParam] = useState('')
  return (
    <Wrapper>
      <h1>Pull Requests</h1>
      <div>
        <Styledinput
          type='text'
          placeholder='search'
          onChange={(e) => setSearchParam(e.target.value)}
          onKeyPress={(e) => { 
            if(e.code === 'Enter') {
              updateSearchParam(searchParam)
            }
          }}
        />
        <StyledButton onClick={() => updateSearchParam(searchParam)}>
          <SearchIcon/>
        </StyledButton>
      </div>
    </Wrapper>
  )
}

Toolbar.propTypes = {
  updateSearchParam: PropTypes.func
}

export default Toolbar
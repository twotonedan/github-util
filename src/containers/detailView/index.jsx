import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Table from 'rc-table'
import {fetchDetails} from '../../redux/actions'
import StyledLoader from '../../components/Loader'
import ErrorMessage from '../../components/ErrorMessage'
import LinkButton from '../../components/LinkButton'
import { getTableData} from './config'
import { TableComponents, StyledTabs, StyledTab } from './styles'


const DetailView = ({fetchDetails, details, loading, error}) => {
  const [inited, setInited] = useState(false)
  const [tab, setTab] = useState(0)
  useEffect(() => {
    if (!inited && !details.length) {
      setInited(true)
      let pullNumber = window.location.pathname.split('/')[2]
      fetchDetails(pullNumber)
    }
  }, [details])
  
  if (error) {
    return <ErrorMessage error={error} />
  } else if (loading) {
    return <StyledLoader/>
  } else {
    const {data, columns} = getTableData(details, tab)
    return (
      <div>
        {details.pullRequest && <h1>{details.pullRequest.title}</h1>}
        <StyledTabs value={tab} onChange={(e, newTab) => setTab(newTab)}>
          <StyledTab label="Commits" />
          <StyledTab label="Reviews" />
          <StyledTab label="Comments" />
          <StyledTab label="Files" />
        </StyledTabs>
        <div style={{background: '#f5f5f5'}}>
          <Table
            columns={columns}
            data={data}
            components={TableComponents}
            emptyText={() => <span style={{margin: 'auto', display: 'table'}}>No entries found.</span>}/>
        </div>
        <LinkButton to="/"/>
    </div>
    )
  }
}

DetailView.propTypes = {
  details: PropTypes.object,
  error: PropTypes.string,
  fetchDetails: PropTypes.func,
  loading: PropTypes.bool
}

const mapStateToProps = ({details, error, loading}) => {
  return {
    details,
    error,
    loading
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: (number) => {
      dispatch(fetchDetails(number))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView)
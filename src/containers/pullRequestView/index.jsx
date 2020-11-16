import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Table from 'rc-table'
import Toolbar from '../../components/Toolbar'
import {getFilteredPullRequests, columns} from './config'
import {fetchPullRequests} from '../../redux/actions'
import StyledLoader from '../../components/Loader'
import ErrorMessage from '../../components/ErrorMessage'
import {TableComponents} from './styles'

const PullRequestView = ({fetchPullRequests, pullRequests, error, loading}) => {
  const [inited, setInited] = useState(false)
  const [searchParam, setSearchParam] = useState('')
  useEffect(() => {
    if (!inited && !pullRequests.length) {
      setInited(true)
      fetchPullRequests()
    }
  }, [pullRequests])

  if (error) {
    return <ErrorMessage error={error} />
  } else if (loading) {
    return <StyledLoader/>
  } else {
    const data = getFilteredPullRequests(pullRequests, searchParam)
    return (
      <div>
        <Toolbar updateSearchParam={setSearchParam}/>
        <Table columns={columns} data={data} components={TableComponents}/>
      </div>
    )
  }
}

PullRequestView.propTypes = {
  error: PropTypes.string,
  fetchPullRequests: PropTypes.func,
  loading: PropTypes.bool,
  pullRequests: PropTypes.array
}

const mapStateToProps = ({error, pullRequests, loading}) => {
  return {
    pullRequests,
    error,
    loading
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPullRequests: () => {
      dispatch(fetchPullRequests())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PullRequestView)

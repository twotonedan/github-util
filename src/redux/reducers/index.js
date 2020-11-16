const reducer = (state = {pullRequests: [], error: null, details: {}, loading: false}, action) => {
  switch (action.type) {
    case 'FETCH_PULL_REQUESTS':
      return { ...state, loading: true, error: null }
    case 'SET_PULL_REQUESTS':
      return { ...state, loading: false, pullRequests: action.pullRequests }
    case 'FETCH_DETAILS':
      return { ...state, loading: true, error: null, details: {} }
    case 'SET_DETAILS':
      return { ...state, loading: false, details: action.details }
    case 'SET_ERROR':
      return { ...state, loading: false, error: action.error }
    default:
      return state
   }
}
export default reducer
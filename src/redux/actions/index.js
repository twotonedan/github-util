export const fetchPullRequests = () => ({
  type: 'FETCH_PULL_REQUESTS',
})

export const fetchDetails = (pullNumber) => {
  return {
    type: 'FETCH_DETAILS',
    pullNumber
  }
}
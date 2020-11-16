import { getFilteredPullRequests } from './config'

describe('getFilteredPullRequests', () => {
  const pullRequests = [
    {
      title: 'Title 1',
      labels: [
        {
          name: 'bug',
          color: 'ffffff'
        },
        {
          name: 'other',
          color: 'fefefe'
        }
      ],
      created_at: '2020-10-26T15:02:44Z',
      number: 5,
      user: {
        login: 'clevername'
      }
    },
    {
      title: 'Title 2',
      labels: [
        {
          name: 'enhancement',
          color: 'eeeeee'
        }
      ],
      created_at: '2020-10-21T15:02:44Z',
      number: 3,
      user: {
        login: 'notsoclevername'
      }
    }
  ]
  it('should return all PRs when search bar is empty', () => {
    const searchParam = ''
    const filteredPullRequests = getFilteredPullRequests(pullRequests, searchParam)
    expect(filteredPullRequests.length).toEqual(2)
  })
  it('should return only matching PRs when search bar is NOT empty', () => {
    let searchParam = 'notsoclevername'
    const filteredPullRequests = getFilteredPullRequests(pullRequests, searchParam)
    expect(filteredPullRequests.length).toEqual(1)
  })
  it('should properly format data', () => {
    const searchParam = ''
    const filteredPullRequests = getFilteredPullRequests(pullRequests, searchParam)
    expect(filteredPullRequests[0]).toEqual({
      title: 'Title 1',
      labels: [
        {
          color: 'ffffff',
          name: 'bug'
        },
        {
          color: 'fefefe',
          name: 'other'
        }
      ],
      key: 0,
      dateOpened: 'Monday, October 26, 2020, 9:02:44 AM',
      user: 'clevername',
      number: 5
    })
  })
})
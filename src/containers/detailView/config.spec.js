import { getTableData } from './config'

describe('getTableData', () => {
  const details = {
    commits: [
      {
        committer: {
          login: 'newguy'
        },
        commit: {
          message: 'first commit',
          committer: {
            date: '2020-10-27T15:02:44Z'
          }
        }
      }
    ],
    reviews: [
      {
        body: 'Looks great!',
        state: 'Done',
        submitted_at: '2020-10-27T15:02:44Z'
      }
    ],
    comments: [
      {
        body: 'Looks alright, I guess',
        user: {
          login: 'thatguy'
        },
        created_at: '2020-10-27T15:02:44Z'
      }
    ],
    files: [
      {
        filename: 'src/containers/detailView/index.jsx',
        patch: `@@ -4,7 +4,7 @@ import React ...`
      }
    ]
  }
  
  it('should return formatted data for commits', () => {
    const tab = 0
    const {data} = getTableData(details, tab)
    expect(data).toEqual([{
      key: 0,
      date: 'Tuesday, October 27, 2020, 9:02:44 AM',
      message: 'first commit',
      user: 'newguy'
    }])
  })

  it('should return formatted data for reviews', () => {
    const tab = 1
    const {data} = getTableData(details, tab)
    expect(data).toEqual([{
      key: 0,
      body: 'Looks great!',
      date: 'Tuesday, October 27, 2020, 9:02:44 AM',
      state: 'Done'
    }])
  })

  it('should return formatted data for comments', () => {
    const tab = 2
    const {data} = getTableData(details, tab)
    expect(data).toEqual([{
      key: 0,
      author: 'thatguy',
      body: 'Looks alright, I guess',
      date: 'Tuesday, October 27, 2020, 9:02:44 AM'
    }])
  })

  it('should return formatted data for files', () => {
    const tab = 3
    const {data} = getTableData(details, tab)
    expect(data).toEqual([{
      key: 0,
      filename: 'src/containers/detailView/index.jsx',
      patch: '@@ -4,7 +4,7 @@ import React ...'
    }])
  })

  it('should return empty array when given bad tab', () => {
    const tab = 'bad'
    const {data} = getTableData(details, tab)
    expect(data).toEqual([])
  })
})

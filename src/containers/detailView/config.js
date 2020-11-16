import React from 'react'
import {formatDate} from '../helpers'

const commitColumns = [
  { 
    title: 'Message',
    key: 'message',
    render: rowData =>
      <span>
        {rowData.message}
      </span>
  },
  {
    title: 'Author',
    key: 'user',
    render: rowData =>
      <span>
        {rowData.user}
      </span>
  },
  {
    title: 'Date',
    key: 'date',
    render: rowData =>
      <span>
        {rowData.date}
      </span>
  },
]

const reviewColumns = [
  {
    title: 'Body',
    key: 'body',
    render: rowData =>
      <span>
        {rowData.body}
      </span>
  },
  {
    title: 'State',
    key: 'state',
    render: rowData =>
      <span>
        {rowData.state}
      </span>
  },
  { 
    title: 'Date', 
    key: 'date',
    render: rowData =>
      <span>
        {rowData.date}
      </span>
  },
]

const commentColumns = [
  { 
    title: 'Message',
    key: 'body',
    render: rowData =>
      <span>
        {rowData.body}
      </span>
  },
  { title: 'Author', field: 'author', searchable: false },
  { title: 'Date', field: 'date', searchable: false }
]

const fileColumns = [
  {
    title: 'Filename',
    key: 'filename',
    render: rowData =>
      <span>
        {rowData.filename}
      </span>
  },
  { 
    title: 'Change',
    key: 'patch',
    render: rowData =>
      <span>
        {rowData.patch}
      </span>
  },
]

const formatCommits = (details) => details.commits && details.commits.length ? 
  details.commits.reduce((acc, entry, index) => {
    return acc.concat({
      key: index,
      message: entry.commit.message,
      user: entry.committer.login,
      date: formatDate(entry.commit.committer.date)
    })
  }, [])
  : []
  
const formatReviews = (details) => details.reviews && details.reviews.length ? 
  details.reviews.reduce((acc, entry, index) => {
    return acc.concat({
      key: index,
      body: entry.body,
      state: entry.state,
      date: formatDate(entry.submitted_at)
    })
  }, [])
  : []

const formatComments = (details) => details.comments && details.comments.length ? 
  details.comments.reduce((acc, entry, index) => {
    return acc.concat({
      key: index,
      body: entry.body,
      author: entry.user.login,
      date: formatDate(entry.created_at)
    })
  }, [])
  : []
  
const formatFiles = (details) => details.files && details.files.length ? 
  details.files.reduce((acc, entry, index) => {
    return acc.concat({
      key: index,
      filename: entry.filename,
      patch: entry.patch
    })
  }, [])
  : []

export const getTableData = (details, tab) => {
  let data
  let columns
  switch(tab) {
    case 0:
      data = formatCommits(details)
      columns = commitColumns
      break
    case 1:
      data = formatReviews(details)
      columns = reviewColumns
      break
    case 2:
      data = formatComments(details)
      columns = commentColumns
      break
    case 3:
      data = formatFiles(details)
      columns = fileColumns
      break
    default:
      return {data: [], columns: {}}
  }
  return {data, columns}
}
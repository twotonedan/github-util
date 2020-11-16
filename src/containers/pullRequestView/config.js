import React from 'react'
import {Link} from "react-router-dom"
import {formatDate} from '../helpers'

export const getFilteredPullRequests= (pullRequests, searchParam) => 
  pullRequests.length ? 
  pullRequests.reduce((acc, entry, index) => {
    let titleMatch = entry.title.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1
    let labelMatch = entry.labels[0].name.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1
    let authorMatch = entry.user.login.toLowerCase().indexOf(searchParam.toLowerCase()) !== -1
    if (titleMatch || labelMatch || authorMatch) {
      return acc.concat({
        key: index,
        title: entry.title,
        labels: entry.labels,
        dateOpened: formatDate(entry.created_at),
        user: entry.user.login,
        number: entry.number
      })
    }
    return acc
  }, [])
  : []

  export const columns = [
    {
      title: 'Title',
      key: 'title',
      render: rowData =>
        <Link key={rowData.key} style={{textDecoration: 'none'}} to={`/details/${rowData.number}`}>
          {rowData.title}
        </Link> 
    },
    { 
      title: 'All Labels',
      key: 'labels',
      render: rowData =>
        rowData.labels.map(label =>
          <span key={rowData.key} style={{background: `#${label.color}`, color: 'black', padding: '5px', borderRadius: '10px', fontWeight: 'bold'}}>
            {label.name}
          </span>
        )
    },
    { 
      title: 'Author',
      key: 'user',
      render: rowData =>
        <span key={rowData.key}>
          {rowData.user}
        </span>
    },
    { 
      title: 'Date Opened',
      key: 'dateOpened',
      render: rowData =>
        <span key={rowData.key}>
          {rowData.dateOpened}
        </span>
    }
  ]
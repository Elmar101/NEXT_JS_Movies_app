'use client'
import React from 'react'

const News = ({params}:any) => {
  return (
    <div> News - {JSON.stringify(params)}</div>
  )
}

export default News
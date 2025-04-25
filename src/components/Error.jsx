import React from 'react'
import {useRouteError} from 'react-router-dom'

const Error = () => {
  const error=useRouteError()

  return (
    <div>
      <h1>Error: {error.message}</h1>
      <pre>{error.staus}-{error.statusText}</pre>
    </div>
  )
}

export default Error

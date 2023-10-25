import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div><h1>OOPS !!</h1>
    <h1>UnExpected Error </h1>
    <p>{error.status + " : " + error.statusText}</p></div>
  )
}

export default Error
import React from 'react'
import { Helmet } from 'react-helmet-async'

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) =>(
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>React Components!</title>

      {/** this works fine */}
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />

      {/** this is shown as html instead of css */}
      <link rel="stylesheet" href="../global.css" />

    </Helmet>
    {children}
  </React.Fragment>
)

export default Wrapper
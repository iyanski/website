/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"

import Header from "./header.jsx"
import "./layout.css"

const Layout = ({
    children
}) => {

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
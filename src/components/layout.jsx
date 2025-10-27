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
        
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1PCKBHS5L6"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1PCKBHS5L6');
          `}
        </script>
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
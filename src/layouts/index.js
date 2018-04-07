import React, { Component } from 'react'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components'
import 'normalize.css'
import 'minireset.css'
import 'prism-themes/themes/prism-cb.css'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { colors } from '../config'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Questrial');

  :root {
    font-family: 'Questrial', sans-serif;
  }

  a {
    color: ${colors.primary};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

class Layout extends Component {
  detectOffline() {
    if (typeof window === 'undefined') return

    const { Offline } = require('react-detect-offline')

    return (
      <Offline>
        <div
          style={{
            marginTop: '-32px',
            marginBottom: '64px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            color: colors.red,
          }}
        >
          No network connection. Some content may be unavailable.
        </div>
      </Offline>
    )
  }

  render() {
    const { children, location } = this.props

    return (
      <div>
        <Head />
        <Header location={location} />
        {this.detectOffline()}
        {children()}
        <Footer />
      </div>
    )
  }
}

export default Layout

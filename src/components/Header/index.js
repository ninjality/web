import React from 'react'
import Link from 'gatsby-link'
import LogoSvg from '../LogoSvg'
import {
  HeaderContainer,
  Logo,
  Tagline,
} from './styled'

const taglines = {
  default: 'Building open source.',
  '/contact': 'Get in touch.',
}

const isDefaultTagline = location => (
  location.pathname === '/' ||
  typeof taglines[location.pathname] === 'undefined'
)

const Header = ({ location }) => (
  <HeaderContainer role="header">
    <Logo>
      {location.pathname === '/' ? (
        <LogoSvg />
      ) : (
        <Link to="/">
          <LogoSvg />
        </Link>
      )}
    </Logo>
    <Tagline secondary={!isDefaultTagline(location)}>
      {taglines[location.pathname] || taglines.default}
    </Tagline>
  </HeaderContainer>
)

export default Header

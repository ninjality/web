import React from 'react'
import Link from 'gatsby-link'
import LogoSvg from '../LogoSvg'
import { HeaderContainer, Logo, Tagline } from './styled'

const Header = ({ location }) => (
  <HeaderContainer role="banner">
    <Logo>
      {location.pathname === '/' ? (
        <LogoSvg />
      ) : (
        <Link to="/">
          <LogoSvg />
        </Link>
      )}
    </Logo>
    {location.pathname === '/' && <Tagline>Building Open Tools</Tagline>}
  </HeaderContainer>
)

export default Header

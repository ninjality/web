import React from 'react'
import styled from 'styled-components'
import LogoSvg from './LogoSvg'

const Container = styled.header.attrs({
  role: 'header',
})`
  padding-top: 4rem;
`

const Logo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

const Tagline = styled.h1`
  color: #222;
  font-size: 2rem;
  text-align: center;
`

const Header = () => (
  <Container>
    <Logo>
      <LogoSvg />
    </Logo>
    <Tagline>Building open source.</Tagline>
  </Container>
)

export default Header

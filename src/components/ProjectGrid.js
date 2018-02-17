import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-left: 6.5rem; /* adjust center */
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  width: auto;
`

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const Item = styled.li`
  margin-bottom: 2rem;
  padding-right: 0rem;
  width: 50%;
`

const Action = styled.a`
  display: flex;
  color: #222;
  transition: all 200ms ease;
  ${props => props.disabled && 'pointer-events: disabled;'}

  &:hover,
  &:focus {
    color: ${props => props.disabled ? '#222' : '#850009'};
    text-decoration: none;
  }
`

const Icon = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border-radius: 10%;
  overflow: hidden;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
`

const Name = styled.p`
  padding-bottom: 1rem;
  font-size: 1.2rem;
`

const Description = styled.p`
  max-width: 320px;
`

export const ProjectGrid = ({ children }) => (
  <Container>
    <Grid>
      {children}
    </Grid>
  </Container>
)

export const ProjectGridItem = ({ name, url, description, icon }) => (
  <Item>
    <Action href={url} disabled={!url}>
      <Icon>
        {icon || <img src="//placehold.it/100" alt="" />}
      </Icon>
      <Content>
        {name && <Name>{name}</Name>}
        <Description>{description}</Description>
      </Content>
    </Action>
  </Item>
)

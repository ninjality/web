import React from 'react'
import Container from '../Container'
import {
  Grid,
  Item,
  Anchor,
  Icon,
  Content,
  Name,
  Description
} from './styled'

export const ProjectGrid = ({ children, ...otherProps }) => (
  <Container {...otherProps}>
    <Grid>
      {children}
    </Grid>
  </Container>
)

export const ProjectGridItem = ({ name, url, description, icon }) => (
  <Item>
    <Anchor href={url} disabled={!url}>
      <Icon>{icon}</Icon>
      <Content>
        {name && <Name>{name}</Name>}
        <Description>{description}</Description>
      </Content>
    </Anchor>
  </Item>
)

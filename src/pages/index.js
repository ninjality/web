import React, { Component } from 'react'
import { ProjectGrid, ProjectGridItem } from '../components/ProjectGrid'
import { projects } from '../config'

const firstProjectsRow = projects.slice(0, 2)
const secondProjectsRow = projects.slice(2, 4)

class Index extends Component {
  render() {
    return (
      <div>
        <ProjectGrid offCenter bottomSpacing>
          {firstProjectsRow.map(project => (
            <ProjectGridItem {...project} key={project.id} />
          ))}
        </ProjectGrid>
        <ProjectGrid offCenter>
          {secondProjectsRow.map(project => (
            <ProjectGridItem {...project} key={project.id} />
          ))}
        </ProjectGrid>
      </div>
    )
  }
}

export default Index

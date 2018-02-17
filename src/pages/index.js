import React, { Component } from 'react'
import { Box } from 'react-feather'
import { ProjectGrid, ProjectGridItem } from '../components/ProjectGrid'
import BrandSearch from '../components/project-icons/BrandSearch'
import Devnews from '../components/project-icons/Devnews'
import Socialshares from '../components/project-icons/Socialshares'

const PROJECTS = [
  {
    name: 'Brand Search',
    url: 'https://brand.sh/',
    description: 'Search assets, colors, and standards for a variety of different brands.',
    icon: <BrandSearch />,
  },
  {
    name: 'devnews',
    url: 'https://devne.ws/',
    description: 'Developer news aggregator.',
    icon: <Devnews />
  },
  {
    name: 'socialshares',
    url: 'https://socialshar.es/',
    description: 'Responsive, secure, and fast share buttons.',
    icon: <Socialshares />
  },
  {
    description: `More coming soon.`,
    icon: <Box color='#999' size={100} />,
  }
];

class Index extends Component {
  render() {
    return (
      <div style={{ paddingTop: '4rem' }}>
        <ProjectGrid>
          {PROJECTS.slice(0, 2).map(project => (
            <ProjectGridItem {...project} key={project.name} />
          ))}
        </ProjectGrid>
        <ProjectGrid>
          {PROJECTS.slice(2, 4).map(project => (
            <ProjectGridItem {...project} key={project.name} />
          ))}
        </ProjectGrid>
      </div>
    )
  }
}

export default Index

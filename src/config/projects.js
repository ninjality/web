import React from 'react'
import { Box } from 'react-feather'
import BrandSearch from '../components/project-icons/BrandSearch'
import Devnews from '../components/project-icons/Devnews'
import Socialshares from '../components/project-icons/Socialshares'
import { gray } from './colors'

export default [
  {
    id: 'brandsearch',
    name: 'Brand Search',
    url: 'https://brand.sh/',
    description:
      'Search assets, colors, and standards for a variety of different brands.',
    icon: <BrandSearch />,
  },
  {
    id: 'devnews',
    name: 'devnews',
    url: 'https://devne.ws/',
    description: 'Developer news aggregator.',
    icon: <Devnews />,
  },
  {
    id: 'socialshares',
    name: 'socialshares',
    url: 'https://socialshar.es/',
    description: 'Responsive, secure, and fast share buttons.',
    icon: <Socialshares />,
  },
  {
    id: 'more',
    description: 'More coming soon.',
    icon: <Box color={gray} size={100} />,
  },
]

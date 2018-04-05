import React from 'react'
import { Twitter, Facebook, Linkedin, Github } from 'react-feather'

const ICON_SIZE = 32

export default [
  {
    label: 'Follow us on Twitter',
    url: 'https://twitter.com/ninjalitydesign',
    icon: <Twitter size={ICON_SIZE} />,
  },
  {
    label: 'Follow us on Facebook',
    url: 'https://www.facebook.com/ninjalitydesign',
    icon: <Facebook size={ICON_SIZE} style={{marginLeft: '-5px'}} />,
  },
  {
    label: 'Follow us on LinkedIn',
    url: 'https://www.linkedin.com/company/ninjality/',
    icon: <Linkedin size={ICON_SIZE} />,
  },
  {
    label: 'Follow us on GitHub',
    url: 'https://github.com/ninjality',
    icon: <Github size={ICON_SIZE} />,
  },
]

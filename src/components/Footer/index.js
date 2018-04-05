import React from 'react'
import { Mail } from 'react-feather'
import SlkMediaSvg from '../project-icons/SlkMedia';
import { AccessibleText } from '../ScreenReader'
import {
  FooterContainer,
  Social,
  SocialItem,
  SocialLink,
  SocialAnchor,
  Company,
} from './styled'
import { social } from '../../config'

const Footer = () => (
  <FooterContainer role="contentinfo">
    <Social>
      <SocialItem>
        <SocialLink to="/contact" title="Send us an email">
          <Mail size={32} />
          <AccessibleText>Send us an email</AccessibleText>
        </SocialLink>
      </SocialItem>
      {social.map(({ url, label, icon }) => (
        <SocialItem key={url}>
          <SocialAnchor href={url} title={label}>
            {icon}
            <AccessibleText>{label}</AccessibleText>
          </SocialAnchor>
        </SocialItem>
      ))}
    </Social>
    <Company>
      <a href="https://slk.media/" title="A SLK Media project">
        <SlkMediaSvg />
        <AccessibleText>SLK Media</AccessibleText>
      </a>
    </Company>
  </FooterContainer>
)

export default Footer

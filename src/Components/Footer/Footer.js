import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter,FaFacebook, FaYoutube } from 'react-icons/fa'
import { Button } from '../../global'
import {FooterContainer, FooterSubheading, FooterSubscription, FooterSubText, Form, FormInput, FooterLink, FooterLinkTitle, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, SocialIcon,SocialIcons,SocialMedia,SocialLogo,SocialWraper, SocialIconsLink, WebsiteRights} from './FooterStyles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubheading>
                    join our exclusive membership to receive the latest news and trends
                </FooterSubheading>
                <FooterSubText>you can unsubscribe at any time</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                    <Button fontBig >Subscribe</Button>
                    
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms and services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms and services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms and services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social media</FooterLinkTitle>
                        <FooterLink to="sign-up">How it works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms and services</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialWraper>
                    <SocialLogo>
                        <SocialIcon />
                        ULTRA
                    </SocialLogo>
                    <WebsiteRights>ULTRA 2020</WebsiteRights>
                </SocialWraper>
                <SocialIcons>
                    <SocialIconsLink to="/">
                        <FaFacebook/>
                    </SocialIconsLink>
                    <SocialIconsLink to="/">
                        <FaTwitter/>
                    </SocialIconsLink>
                    <SocialIconsLink to="/">
                        <FaInstagram/>
                    </SocialIconsLink>
                    <SocialIconsLink to="/">
                        <FaYoutube/>
                    </SocialIconsLink>
                    <SocialIconsLink to="/">
                        <FaLinkedin/>
                    </SocialIconsLink>
                </SocialIcons>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer

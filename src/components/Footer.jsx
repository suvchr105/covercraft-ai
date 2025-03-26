import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: white;
  padding: 3rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FooterLogo = styled(Link)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  display: inline-block;
  
  span {
    color: ${props => props.theme.colors.accent};
  }
`;

const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  max-width: 400px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.25rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const FooterTitle = styled.h4`
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.75rem;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  text-align: center;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <FooterLogo to="/">
            Cover<span>Craft</span> AI
          </FooterLogo>
          <FooterDescription>
            AI-powered cover letter generator that helps you create professional, 
            personalized cover letters in minutes.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="mailto:contact@covercraftai.com">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </div>
        
        <div>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/">Home</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/generator">Cover Letter Generator</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/about">About Us</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/privacy">Privacy Policy</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/terms">Terms of Service</Link>
            </FooterLink>
          </FooterLinks>
        </div>
        
        <div>
          <FooterTitle>Resources</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/blog">Blog</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/faq">FAQ</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/support">Support</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/contact">Contact Us</Link>
            </FooterLink>
          </FooterLinks>
        </div>
      </FooterContent>
      
      <Copyright>
        &copy; {currentYear} CoverCraft AI. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

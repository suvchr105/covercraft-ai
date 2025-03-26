import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFileAlt, FaInfoCircle, FaHome } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.light};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  
  span {
    color: ${props => props.theme.colors.accent};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.active ? props.theme.colors.accent : props.theme.colors.text};
  font-weight: 600;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Header = () => {
  const location = useLocation();
  
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          Cover<span>Craft</span> AI
        </Logo>
        
        <NavLinks>
          <NavItem>
            <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>
              <FaHome /> Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/generator" active={location.pathname === '/generator' ? 1 : 0}>
              <FaFileAlt /> Generator
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>
              <FaInfoCircle /> About
            </NavLink>
          </NavItem>
        </NavLinks>
        
        <MobileMenuButton>
          <FaHome />
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

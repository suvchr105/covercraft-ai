import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRocket, FaFileAlt, FaCheckCircle, FaUserTie } from 'react-icons/fa';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.colors.accent};
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    color: white;
  }
`;

const FeaturesSection = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroTitle>Create Perfect Cover Letters in Seconds</HeroTitle>
            <HeroSubtitle>
              CoverCraft AI analyzes your resume and job descriptions to generate tailored, 
              professional cover letters that help you stand out from the crowd.
            </HeroSubtitle>
            <CTAButton to="/generator">
              Create Your Cover Letter
            </CTAButton>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <div className="container">
          <SectionTitle>Why Choose CoverCraft AI?</SectionTitle>
          
          <FeaturesGrid>
            <FeatureCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <FeatureIcon>
                <FaRocket />
              </FeatureIcon>
              <FeatureTitle>AI-Powered Personalization</FeatureTitle>
              <p>Our advanced AI analyzes your resume and job descriptions to create perfectly tailored cover letters that highlight your most relevant skills and experiences.</p>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FeatureIcon>
                <FaFileAlt />
              </FeatureIcon>
              <FeatureTitle>ATS-Friendly Templates</FeatureTitle>
              <p>Our cover letters are designed to pass through Applicant Tracking Systems with ease, ensuring your application gets seen by human recruiters.</p>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <FeatureIcon>
                <FaCheckCircle />
              </FeatureIcon>
              <FeatureTitle>Quick & Easy Process</FeatureTitle>
              <p>Generate a professional cover letter in minutes, not hours. Simply upload your resume, paste the job description, and let our AI do the work.</p>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </FeaturesSection>
    </>
  );
};

export default Home;

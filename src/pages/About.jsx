import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRocket, FaUserTie, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const MissionSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const MissionText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const MissionImage = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const ValuesSection = styled.section`
  margin-bottom: 4rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const ValueTitle = styled.h3`
  margin-bottom: 1rem;
`;

const TeamSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f8f9fa;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
`;

const MemberName = styled.h3`
  margin-bottom: 0.5rem;
`;

const MemberRole = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  color: #666;
  font-size: 0.875rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>About CoverCraft AI</PageTitle>
          <Subtitle>
            We're on a mission to simplify the job application process and help job seekers 
            create standout cover letters that get results.
          </Subtitle>
        </motion.div>
      </HeroSection>
      
      <MissionSection>
        <MissionContent>
          <SectionTitle>Our Mission</SectionTitle>
          <MissionText>
            At CoverCraft AI, we believe that everyone deserves a fair chance at their dream job. 
            We understand that writing cover letters can be time-consuming and challenging, 
            especially when you're applying to multiple positions.
          </MissionText>
          <MissionText>
            Our AI-powered platform was created to level the playing field, giving job seekers 
            the tools they need to create professional, personalized cover letters that highlight 
            their unique skills and experiences. By automating the cover letter writing process, 
            we help you focus on what matters most: preparing for interviews and finding the 
            perfect job match.
          </MissionText>
        </MissionContent>
        
        <MissionImage>
          <FaRocket />
        </MissionImage>
      </MissionSection>
      
      <ValuesSection>
        <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Values</SectionTitle>
        
        <ValuesGrid>
          <ValueCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <ValueIcon>
              <FaUserTie />
            </ValueIcon>
            <ValueTitle>Professionalism</ValueTitle>
            <p>
              We're committed to helping you present yourself in the best possible light with 
              high-quality, professional content that meets industry standards.
            </p>
          </ValueCard>
          
          <ValueCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ValueIcon>
              <FaLightbulb />
            </ValueIcon>
            <ValueTitle>Innovation</ValueTitle>
            <p>
              We continuously improve our AI algorithms to ensure you receive the most relevant, 
              personalized, and effective cover letters possible.
            </p>
          </ValueCard>
          
          <ValueCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <ValueIcon>
              <FaShieldAlt />
            </ValueIcon>
            <ValueTitle>Privacy</ValueTitle>
            <p>
              We respect your privacy and handle your data with the utmost care, ensuring your 
              personal information and job application materials remain secure.
            </p>
          </ValueCard>
          
          <ValueCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <ValueIcon>
              <FaRocket />
            </ValueIcon>
            <ValueTitle>Empowerment</ValueTitle>
            <p>
              We aim to empower job seekers by providing tools that save time, reduce stress, 
              and increase confidence during the job application process.
            </p>
          </ValueCard>
        </ValuesGrid>
      </ValuesSection>
      
      <TeamSection>
        <SectionTitle>Meet Our Team</SectionTitle>
        <p>The passionate people behind CoverCraft AI</p>
        
        <TeamGrid>
          <TeamMember>
            <MemberImage>
              <FaUserTie />
            </MemberImage>
            <MemberName>Alex Johnson</MemberName>
            <MemberRole>Founder & CEO</MemberRole>
            <MemberBio>
              With over 10 years of experience in HR and recruitment, Alex founded CoverCraft AI 
              to solve the challenges job seekers face when writing cover letters.
            </MemberBio>
          </TeamMember>
          
          <TeamMember>
            <MemberImage>
              <FaUserTie />
            </MemberImage>
            <MemberName>Sarah Chen</MemberName>
            <MemberRole>AI Research Lead</MemberRole>
            <MemberBio>
              Sarah brings her expertise in natural language processing and machine learning 
              to develop our advanced AI algorithms.
            </MemberBio>
          </TeamMember>
          
          <TeamMember>
            <MemberImage>
              <FaUserTie />
            </MemberImage>
            <MemberName>Michael Rodriguez</MemberName>
            <MemberRole>Head of Product</MemberRole>
            <MemberBio>
              Michael ensures our platform delivers an exceptional user experience and 
              continuously evolves to meet user needs.
            </MemberBio>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;

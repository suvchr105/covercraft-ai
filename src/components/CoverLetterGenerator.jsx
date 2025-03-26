import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCog, FaRobot, FaMagic } from 'react-icons/fa';

const GeneratorContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 2rem;
`;

const Spinner = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid rgba(67, 97, 238, 0.1);
  border-top-color: ${props => props.theme.colors.primary};
  margin: 0 auto 2rem;
`;

const ProgressContainer = styled.div`
  max-width: 400px;
  margin: 0 auto 2rem;
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
`;

const ProgressText = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const StepList = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  opacity: ${props => props.active ? 1 : props.completed ? 0.7 : 0.4};
`;

const StepIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => props.completed ? props.theme.colors.accent : props.active ? props.theme.colors.primary : '#eee'};
  color: ${props => props.completed || props.active ? 'white' : '#666'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  margin-right: 1rem;
`;

const StepText = styled.p`
  font-weight: ${props => props.active ? '600' : '400'};
`;

const CoverLetterGenerator = ({ isGenerating }) => {
  // Simulate progress for demo purposes
  const progress = 75;
  const currentStep = 3;
  
  const steps = [
    { id: 1, text: 'Analyzing resume content' },
    { id: 2, text: 'Extracting key skills and experience' },
    { id: 3, text: 'Matching with job requirements' },
    { id: 4, text: 'Generating personalized cover letter' }
  ];
  
  return (
    <GeneratorContainer>
      <Icon>
        <FaRobot />
      </Icon>
      <Title>Generating Your Cover Letter</Title>
      <Description>
        Our AI is analyzing your resume and the job description to create a personalized cover letter.
      </Description>
      
      <Spinner
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      
      <ProgressContainer>
        <ProgressBar>
          <ProgressFill
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </ProgressBar>
        <ProgressText>{progress}% Complete</ProgressText>
      </ProgressContainer>
      
      <StepList>
        {steps.map((step) => (
          <Step 
            key={step.id} 
            active={step.id === currentStep}
            completed={step.id < currentStep}
          >
            <StepIcon active={step.id === currentStep} completed={step.id < currentStep}>
              {step.id < currentStep ? '✓' : step.id}
            </StepIcon>
            <StepText active={step.id === currentStep}>{step.text}</StepText>
          </Step>
        ))}
      </StepList>
    </GeneratorContainer>
  );
};

export default CoverLetterGenerator;

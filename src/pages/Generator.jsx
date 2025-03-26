import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ResumeUploader from '../components/ResumeUploader';
import JobDescriptionInput from '../components/JobDescriptionInput';
import CoverLetterGenerator from '../components/CoverLetterGenerator';
import CoverLetterEditor from '../components/CoverLetterEditor';
import TemplateSelector from '../components/TemplateSelector';
import DownloadOptions from '../components/DownloadOptions';

const GeneratorContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.theme.colors.primary : props.completed ? props.theme.colors.accent : props.theme.colors.background};
  color: ${props => props.active || props.completed ? 'white' : props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 0.5rem;
  box-shadow: ${props => props.active ? '0 0 0 4px rgba(67, 97, 238, 0.2)' : 'none'};
`;

const StepLabel = styled.span`
  font-size: 0.875rem;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${props => props.active ? '600' : '400'};
  text-align: center;
`;

const StepConnector = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: ${props => props.completed ? props.theme.colors.accent : props.theme.colors.background};
  margin: 0 0.5rem;
  align-self: center;
`;

const StepContent = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${props => props.step === 1 ? 'flex-end' : 'space-between'};
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: ${props => props.secondary ? 'transparent' : props.theme.colors.primary};
  color: ${props => props.secondary ? props.theme.colors.primary : 'white'};
  border: ${props => props.secondary ? `1px solid ${props.theme.colors.primary}` : 'none'};
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.secondary ? 'rgba(67, 97, 238, 0.1)' : props.theme.colors.secondary};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Generator = () => {
  const [step, setStep] = useState(1);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  
  const handleResumeUpload = (file) => {
    setResumeFile(file);
  };
  
  const handleJobDescriptionChange = (text) => {
    setJobDescription(text);
  };
  
  const handleGenerateCoverLetter = async () => {
    setIsGenerating(true);
    
    try {
      // In a real app, you'd call your API here
      // For demo purposes, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const sampleCoverLetter = `Dear Hiring Manager,

I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [relevant field] and experience in [relevant skill], I believe I would be a valuable addition to your team.

My experience at [Previous Company] has equipped me with the skills necessary to excel in this role. I have successfully [achievement 1] and [achievement 2], which demonstrates my ability to [relevant skill for the job].

I am particularly drawn to [Company Name] because of your commitment to [company value or project]. I am excited about the opportunity to contribute to [specific aspect of the company or role].

Thank you for considering my application. I look forward to the possibility of discussing how my skills and experiences align with your needs.

Sincerely,
[Your Name]`;
      
      setCoverLetter(sampleCoverLetter);
      setStep(3);
    } catch (error) {
      console.error('Error generating cover letter:', error);
      // Handle error state
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleCoverLetterEdit = (text) => {
    setCoverLetter(text);
  };
  
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  return (
    <GeneratorContainer>
      <PageTitle>Cover Letter Generator</PageTitle>
      
      <StepIndicator>
        <Step>
          <StepNumber active={step === 1} completed={step > 1}>1</StepNumber>
          <StepLabel active={step === 1}>Upload Resume</StepLabel>
        </Step>
        
        <StepConnector completed={step > 1} />
        
        <Step>
          <StepNumber active={step === 2} completed={step > 2}>2</StepNumber>
          <StepLabel active={step === 2}>Job Details</StepLabel>
        </Step>
        
        <StepConnector completed={step > 2} />
        
        <Step>
          <StepNumber active={step === 3} completed={step > 3}>3</StepNumber>
          <StepLabel active={step === 3}>Edit Letter</StepLabel>
        </Step>
        
        <StepConnector completed={step > 3} />
        
        <Step>
          <StepNumber active={step === 4} completed={step > 4}>4</StepNumber>
          <StepLabel active={step === 4}>Download</StepLabel>
        </Step>
      </StepIndicator>
      
      {step === 1 && (
        <StepContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ResumeUploader onUpload={handleResumeUpload} />
          
          <ButtonContainer step={step}>
            <Button onClick={nextStep} disabled={!resumeFile}>
              Next: Job Details
            </Button>
          </ButtonContainer>
        </StepContent>
      )}
      
      {step === 2 && (
        <StepContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <JobDescriptionInput 
            value={jobDescription} 
            onChange={handleJobDescriptionChange} 
          />
          
          <ButtonContainer step={step}>
            <Button secondary onClick={prevStep}>
              Back
            </Button>
            <Button 
              onClick={handleGenerateCoverLetter} 
              disabled={!jobDescription || isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Cover Letter'}
            </Button>
          </ButtonContainer>
        </StepContent>
      )}
      
      {step === 3 && (
        <StepContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <CoverLetterEditor 
            value={coverLetter} 
            onChange={handleCoverLetterEdit} 
          />
          
          <TemplateSelector 
            selected={selectedTemplate} 
            onSelect={handleTemplateSelect} 
          />
          
          <ButtonContainer step={step}>
            <Button secondary onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>
              Next: Download Options
            </Button>
          </ButtonContainer>
        </StepContent>
      )}
      
      {step === 4 && (
        <StepContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <DownloadOptions 
            coverLetter={coverLetter} 
            template={selectedTemplate} 
          />
          
          <ButtonContainer step={step}>
            <Button secondary onClick={prevStep}>
              Back to Editor
            </Button>
          </ButtonContainer>
        </StepContent>
      )}
    </GeneratorContainer>
  );
};

export default Generator;

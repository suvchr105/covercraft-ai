import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

const InputContainer = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.body};
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
  }
`;

const HelpText = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
`;

const TipsContainer = styled.div`
  background-color: rgba(67, 97, 238, 0.05);
  border-left: 3px solid ${props => props.theme.colors.primary};
  padding: 1rem;
  border-radius: 0 4px 4px 0;
  margin-top: 1.5rem;
`;

const TipsTitle = styled.h4`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const TipsList = styled.ul`
  padding-left: 1.5rem;
  margin: 0;
  
  li {
    margin-bottom: 0.5rem;
  }
  
  li:last-child {
    margin-bottom: 0;
  }
`;

const JobDescriptionInput = ({ value, onChange }) => {
  return (
    <InputContainer>
      <Label htmlFor="jobDescription">Job Description</Label>
      <TextArea
        id="jobDescription"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the full job description here..."
      />
      <HelpText>
        For best results, include the complete job description with requirements and responsibilities.
      </HelpText>
      
      <TipsContainer>
        <TipsTitle>
          <FaBriefcase /> Tips for Better Results
        </TipsTitle>
        <TipsList>
          <li>Include the job title, company name, and location</li>
          <li>Make sure to include all required skills and qualifications</li>
          <li>Add information about company culture if available</li>
          <li>Include any specific requirements or preferences mentioned in the posting</li>
        </TipsList>
      </TipsContainer>
    </InputContainer>
  );
};

export default JobDescriptionInput;

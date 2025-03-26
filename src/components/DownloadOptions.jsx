import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFilePdf, FaFileWord, FaFileAlt, FaCopy, FaCheck, FaDownload } from 'react-icons/fa';

const OptionsContainer = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
`;

const PreviewContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  font-family: ${props => props.theme.fonts.body};
  white-space: pre-line;
  line-height: 1.6;
`;

const DownloadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const DownloadCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-color: ${props => props.theme.colors.primary};
  }
`;

const DownloadIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const DownloadTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

const DownloadDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const DownloadButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const CopyButton = styled.button`
  background-color: transparent;
  color: ${props => props.copied ? props.theme.colors.accent : props.theme.colors.primary};
  border: 1px solid ${props => props.copied ? props.theme.colors.accent : props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: rgba(67, 97, 238, 0.05);
  }
`;

const DownloadOptions = ({ coverLetter, template }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  const handleDownload = (format) => {
    // In a real app, this would call an API to generate the file
    alert(`Downloading cover letter in ${format} format`);
  };
  
  return (
    <OptionsContainer>
      <Title>Your Cover Letter is Ready!</Title>
      
      <PreviewContainer>
        {coverLetter}
      </PreviewContainer>
      
      <DownloadGrid>
        <DownloadCard>
          <DownloadIcon>
            <FaFilePdf />
          </DownloadIcon>
          <DownloadTitle>PDF Format</DownloadTitle>
          <DownloadDescription>
            Professional format ideal for submitting job applications
          </DownloadDescription>
          <DownloadButton onClick={() => handleDownload('PDF')}>
            <FaDownload /> Download PDF
          </DownloadButton>
        </DownloadCard>
        
        <DownloadCard>
          <DownloadIcon>
            <FaFileWord />
          </DownloadIcon>
          <DownloadTitle>Word Format</DownloadTitle>
          <DownloadDescription>
            Editable document for further customization
          </DownloadDescription>
          <DownloadButton onClick={() => handleDownload('Word')}>
            <FaDownload /> Download DOCX
          </DownloadButton>
        </DownloadCard>
        
        <DownloadCard>
          <DownloadIcon>
            <FaFileAlt />
          </DownloadIcon>
          <DownloadTitle>Plain Text</DownloadTitle>
          <DownloadDescription>
            Copy text to clipboard for pasting elsewhere
          </DownloadDescription>
          <CopyButton onClick={handleCopy} copied={copied}>
            {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy Text</>}
          </CopyButton>
        </DownloadCard>
      </DownloadGrid>
    </OptionsContainer>
  );
};

export default DownloadOptions;

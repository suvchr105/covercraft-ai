import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';

const EditorContainer = styled.div`
  margin-bottom: 2rem;
`;

const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const EditorTitle = styled.h3`
  margin: 0;
`;

const EditorToolbar = styled.div`
  display: flex;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  padding: 0.5rem;
`;

const ToolbarButton = styled.button`
  background: ${props => props.active ? 'rgba(67, 97, 238, 0.1)' : 'transparent'};
  border: none;
  color: ${props => props.active ? props.theme.colors.primary : '#666'};
  width: 36px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(67, 97, 238, 0.1);
    color: ${props => props.theme.colors.primary};
  }
  
  &:not(:last-child) {
    margin-right: 0.25rem;
  }
`;

const ToolbarDivider = styled.div`
  width: 1px;
  background-color: #ddd;
  margin: 0 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 400px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0 0 4px 4px;
  font-family: ${props => props.theme.fonts.body};
  resize: vertical;
  line-height: 1.6;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const InfoText = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.5rem;
`;

const CoverLetterEditor = ({ value, onChange }) => {
  const [activeButtons, setActiveButtons] = useState({
    bold: false,
    italic: false,
    underline: false,
    alignLeft: true,
    alignCenter: false,
    alignRight: false
  });
  
  const toggleButton = (button) => {
    if (['alignLeft', 'alignCenter', 'alignRight'].includes(button)) {
      setActiveButtons({
        ...activeButtons,
        alignLeft: button === 'alignLeft',
        alignCenter: button === 'alignCenter',
        alignRight: button === 'alignRight'
      });
    } else {
      setActiveButtons({
        ...activeButtons,
        [button]: !activeButtons[button]
      });
    }
  };
  
  return (
    <EditorContainer>
      <EditorHeader>
        <EditorTitle>Edit Your Cover Letter</EditorTitle>
      </EditorHeader>
      
      <EditorToolbar>
        <ToolbarButton 
          active={activeButtons.bold}
          onClick={() => toggleButton('bold')}
        >
          <FaBold />
        </ToolbarButton>
        <ToolbarButton 
          active={activeButtons.italic}
          onClick={() => toggleButton('italic')}
        >
          <FaItalic />
        </ToolbarButton>
        <ToolbarButton 
          active={activeButtons.underline}
          onClick={() => toggleButton('underline')}
        >
          <FaUnderline />
        </ToolbarButton>
        
        <ToolbarDivider />
        
        <ToolbarButton 
          active={activeButtons.alignLeft}
          onClick={() => toggleButton('alignLeft')}
        >
          <FaAlignLeft />
        </ToolbarButton>
        <ToolbarButton 
          active={activeButtons.alignCenter}
          onClick={() => toggleButton('alignCenter')}
        >
          <FaAlignCenter />
        </ToolbarButton>
        <ToolbarButton 
          active={activeButtons.alignRight}
          onClick={() => toggleButton('alignRight')}
        >
          <FaAlignRight />
        </ToolbarButton>
      </EditorToolbar>
      
      <TextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      
      <InfoText>
        Tip: Personalize your cover letter by replacing any placeholder text like [Company Name] or [Job Title].
      </InfoText>
    </EditorContainer>
  );
};

export default CoverLetterEditor;

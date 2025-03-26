import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SelectorContainer = styled.div`
  margin-top: 2rem;
`;

const SelectorTitle = styled.h3`
  margin-bottom: 1rem;
`;

const TemplatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TemplateCard = styled(motion.div)`
  border: 2px solid ${props => props.selected ? props.theme.colors.primary : '#ddd'};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${props => props.selected ? '0 0 0 3px rgba(67, 97, 238, 0.2)' : 'none'};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const TemplatePreview = styled.div`
  height: 150px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  padding: 1rem;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const TemplateMockup = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TemplateLine = styled.div`
  height: 8px;
  background-color: ${props => props.width ? `rgba(0, 0, 0, 0.${props.dark ? '2' : '1'})` : 'transparent'};
  width: ${props => props.width || '100%'};
  margin-bottom: 6px;
  border-radius: 4px;
`;

const TemplateInfo = styled.div`
  padding: 1rem;
`;

const TemplateName = styled.h4`
  margin: 0 0 0.5rem;
  color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.text};
`;

const TemplateDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin: 0;
`;

const TemplateSelector = ({ selected, onSelect }) => {
  const templates = [
    {
      id: 'professional',
      name: 'Professional',
      description: 'Clean and traditional format suitable for most industries'
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Contemporary design with a creative touch'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Simple and straightforward layout focusing on content'
    }
  ];
  
  return (
    <SelectorContainer>
      <SelectorTitle>Select a Template</SelectorTitle>
      
      <TemplatesGrid>
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            selected={selected === template.id}
            onClick={() => onSelect(template.id)}
            whileHover={{ y: -5 }}
          >
            <TemplatePreview>
              {template.id === 'professional' && (
                <TemplateMockup>
                  <TemplateLine width="40%" dark />
                  <TemplateLine width="60%" />
                  <TemplateLine width="0" />
                  <TemplateLine width="100%" />
                  <TemplateLine width="100%" />
                  <TemplateLine width="80%" />
                  <TemplateLine width="0" />
                  <TemplateLine width="100%" />
                  <TemplateLine width="90%" />
                </TemplateMockup>
              )}
              
              {template.id === 'modern' && (
                <TemplateMockup>
                  <TemplateLine width="30%" dark />
                  <TemplateLine width="50%" />
                  <TemplateLine width="0" />
                  <TemplateLine width="100%" />
                  <TemplateLine width="90%" />
                  <TemplateLine width="0" />
                  <TemplateLine width="100%" />
                  <TemplateLine width="70%" />
                  <TemplateLine width="80%" />
                </TemplateMockup>
              )}
              
              {template.id === 'minimal' && (
                <TemplateMockup>
                  <TemplateLine width="40%" dark />
                  <TemplateLine width="0" />
                  <TemplateLine width="100%" />
                  <TemplateLine width="100%" />
                  <TemplateLine width="90%" />
                  <TemplateLine width="0" />
                  <TemplateLine width="100%" />
                  <TemplateLine width="100%" />
                  <TemplateLine width="50%" />
                </TemplateMockup>
              )}
            </TemplatePreview>
            
            <TemplateInfo>
              <TemplateName selected={selected === template.id}>
                {template.name}
              </TemplateName>
              <TemplateDescription>
                {template.description}
              </TemplateDescription>
            </TemplateInfo>
          </TemplateCard>
        ))}
      </TemplatesGrid>
    </SelectorContainer>
  );
};

export default TemplateSelector;

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFileUpload, FaFilePdf, FaFileWord, FaTrash } from 'react-icons/fa';

const UploaderContainer = styled.div`
  margin-bottom: 2rem;
`;

const UploadArea = styled.div`
  border: 2px dashed ${props => props.isDragActive ? props.theme.colors.primary : '#ddd'};
  border-radius: 8px;
  padding: 3rem 2rem;
  text-align: center;
  background-color: ${props => props.isDragActive ? 'rgba(67, 97, 238, 0.05)' : 'transparent'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background-color: rgba(67, 97, 238, 0.05);
  }
`;

const UploadIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const UploadText = styled.p`
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const UploadSubtext = styled.p`
  color: #666;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const FileInput = styled.input`
  display: none;
`;

const BrowseButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const FilePreview = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1.5rem;
`;

const FileIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-right: 1rem;
`;

const FileInfo = styled.div`
  flex-grow: 1;
`;

const FileName = styled.p`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const FileSize = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #dc3545;
  cursor: pointer;
  font-size: 1.25rem;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  margin-top: 1rem;
  font-size: 0.875rem;
`;

const ResumeUploader = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };
  
  const validateAndSetFile = (selectedFile) => {
    setError('');
    
    if (!selectedFile) return;
    
    // Check file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(selectedFile.type)) {
      setError('Please upload a PDF or Word document.');
      return;
    }
    
    // Check file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB.');
      return;
    }
    
    setFile(selectedFile);
    onUpload(selectedFile);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };
  
  const handleDragLeave = () => {
    setIsDragActive(false);
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };
  
  const handleRemoveFile = () => {
    setFile(null);
    onUpload(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };
  
  const getFileIcon = (fileType) => {
    if (fileType === 'application/pdf') return <FaFilePdf />;
    else return <FaFileWord />;
  };
  
  return (
    <UploaderContainer>
      {!file ? (
        <UploadArea
          isDragActive={isDragActive}
          onClick={() => fileInputRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadIcon>
            <FaFileUpload />
          </UploadIcon>
          <UploadText>Drag & drop your resume here</UploadText>
          <UploadSubtext>Supports PDF, DOC, DOCX (Max 5MB)</UploadSubtext>
          <BrowseButton onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current.click();
          }}>
            Browse Files
          </BrowseButton>
          <FileInput
            type="file"
            accept=".pdf,.doc,.docx"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </UploadArea>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FilePreview>
            <FileIcon>
              {getFileIcon(file.type)}
            </FileIcon>
            <FileInfo>
              <FileName>{file.name}</FileName>
              <FileSize>{formatFileSize(file.size)}</FileSize>
            </FileInfo>
            <RemoveButton onClick={handleRemoveFile}>
              <FaTrash />
            </RemoveButton>
          </FilePreview>
        </motion.div>
      )}
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </UploaderContainer>
  );
};

export default ResumeUploader;

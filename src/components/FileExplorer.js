import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Tree from './Tree';

const StyledFileExplorer = styled.div`
	width: 800px;
	max-width: 100%;
	margin: 0 auto;
	display: flex;
`;

const TreeWrapper = styled.div`width: 250px;`;

const FileExplorer = () => {
	const [ currentFile, setCurrentFile ] = useState({ type: '', content: ''});

	const onSelect = (file) => {
    setCurrentFile(currentFile => file)
  };

	return (
		<StyledFileExplorer>
			<TreeWrapper>
				<Tree onSelect={onSelect} />
			</TreeWrapper>
			<div>{currentFile && currentFile.type === 'file' && currentFile.content}</div>
		</StyledFileExplorer>
	);
};

export default FileExplorer;
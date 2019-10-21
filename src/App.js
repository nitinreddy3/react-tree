import React from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer';
import EnhancedTable from './components/EnhancedTable';
import NativeSelects from './components/NativeSelects';
import BasicTreeData from './components/BasicTreeData';
import PureExpandableTable from './components/PureExpandableTable';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">POC on Tree Layout</h1>
			</header>
			<div className="App-intro">
				<FileExplorer />
				{/* <EnhancedTable />
				<NativeSelects /> */}
				{/* <BasicTreeData /> */}
				<PureExpandableTable />
			</div>

		</div>
	);
};

export default App;

import React from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer';
import EnhancedTable from './components/EnhancedTable';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-title">POC on Tree Layout</h1>
			</header>
			<div className="App-intro">
				<FileExplorer />
				<EnhancedTable />
			</div>

		</div>
	);
};

export default App;

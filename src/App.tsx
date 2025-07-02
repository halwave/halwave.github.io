import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import MainPage from './MainPage';
import JourneyPage from './pages/JourneyPage';
import ProjectsPage from './pages/ProjectsPage';
import BeyondCodePage from './pages/BeyondCodePage';
import ResumePage from './pages/ResumePage';
import Layout from './components/Layout';

const App: React.FC = () => (
	<Router>
		<Layout>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/resume" element={<ResumePage />} />
				<Route path="/journey" element={<JourneyPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/beyond-code" element={<BeyondCodePage />} />
			</Routes>
		</Layout>
	</Router>
);

export default App;

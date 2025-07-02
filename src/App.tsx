import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import AboutSection from './components/AboutSection';
import InterestsSection from './components/InterestsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import JourneyPage from './pages/JourneyPage';
import ProjectsPage from './pages/ProjectsPage';
import BeyondCodePage from './pages/BeyondCodePage';
import Layout from './components/Layout';

const MainPage: React.FC = () => (
	<>
		<SkillsSection />
		<AboutSection />
		<ExperienceSection />
		<InterestsSection />
	</>
);

const App: React.FC = () => (
	<Router>
		<Layout>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/journey" element={<JourneyPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/beyond-code" element={<BeyondCodePage />} />
			</Routes>
		</Layout>
	</Router>
);

export default App;

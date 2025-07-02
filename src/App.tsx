import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import InterestsSection from './components/InterestsSection';
import ExperienceSection from './components/ExperienceSection';
import projects from './data/projects';
import JourneyPage from './pages/JourneyPage';
import Layout from './components/Layout';

const MainPage: React.FC = () => (
	<>
		<ProjectsSection projects={projects} />
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
			</Routes>
		</Layout>
	</Router>
);

export default App;

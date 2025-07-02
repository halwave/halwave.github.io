import './index.css';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import InterestsSection from './components/InterestsSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import projects from './data/projects';

function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-[#2d006e] via-pink-600 to-[#ff5fd8] text-white font-mono">
			<div className="mx-auto w-full max-w-5xl px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
				<Header />
				<ProjectsSection projects={projects} />
				<AboutSection />
				<ExperienceSection />
				<InterestsSection />
				<Footer />
			</div>
		</div>
	);
}

export default App;

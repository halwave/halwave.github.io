import './index.css';
import Header from './components/Header';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import InterestsSection from './components/InterestsSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';

const projects = [
	{
		title: 'MissileDefense.io',
		image: '/images/missiledefense.png',
		link: 'https://github.com/hwhiston/MissileDefense.io/tree/master',
		description: 'A retro-inspired missile defense game built with JavaScript.',
	},
	{
		title: 'Florabot (art by © Nintendo)',
		image: '/images/florabot.jpg',
		link: '#',
		description: 'A fun bot project with custom art.',
	},
	{
		title: 'C# Pathfinding',
		image: '/images/pathfinding.png',
		link: '#',
		description: 'Pathfinding algorithms in C# for games.',
	},
	{
		title: 'Feliciabot (art by © Nintendo)',
		image: '/images/feliciabot.jpg',
		link: '#',
		description: 'Another bot project with unique features.',
	},
	{
		title: 'Skeleton Key',
		image: '/images/skeletonkey.png',
		link: '#',
		description: 'A puzzle game with a retro twist.',
	},
	{
		title: 'Python Tutorial for Beginners',
		image: '/images/python.jpg',
		link: 'https://github.com/hwhiston/PythonTutorialForBeginners',
		description: 'A beginner-friendly Python tutorial.',
	},
	{
		title: 'My Smash News',
		image: '/images/smash.png',
		link: 'https://github.com/hwhiston/MySmashNews',
		description: 'A news aggregator for Smash fans.',
	},
	{
		title: 'Spherule',
		image: '/images/spherule.jpg',
		link: 'https://github.com/hwhiston/Spherule',
		description: 'A physics-based puzzle game.',
	},
	{
		title: 'Sword Runner',
		image: '/images/unity.png',
		link: 'https://github.com/hwhiston/Swordrunner',
		description: 'A Unity-powered endless runner.',
	},
	{
		title: 'Simple Chat',
		image: '/images/simplechat.jpg',
		link: 'https://github.com/hwhiston/SimpleChat',
		description: 'A simple chat app with a vaporwave UI.',
	},
	{
		title: 'My Resume (old)',
		image: '/images/myresume.jpg',
		link: 'http://whistonh.myweb.cs.uwindsor.ca/',
		description: 'My previous resume site.',
	},
];

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

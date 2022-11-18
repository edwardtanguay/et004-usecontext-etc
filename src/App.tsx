import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageAbout } from './pages/PageAbout';
import { useContext } from 'react';
import { AppContext } from './AppContext';
import { PageBooks } from './pages/PageBooks';

function App() {
	const { appTitle } = useContext(AppContext);
	return (
		<div className="App">
			<h1>{appTitle}</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/books">Books</NavLink>
				<NavLink to="/about">About</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/books" element={<PageBooks />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;

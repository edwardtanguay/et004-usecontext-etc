import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
	const { books } = useContext(AppContext);
	return (
		<>
			<p>Welcome to this site.</p>
			<p>Our club is reading {books.length} books.</p>
		</>
	);
};
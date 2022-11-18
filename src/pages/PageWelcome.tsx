import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
	const { books, booksAreLoading } = useContext(AppContext);
	return (
		<>
			<p>Welcome to this site.</p>
			{booksAreLoading ? (
				<div className="loading">Books are loading...</div>
			) : (
				<p>Our club is reading {books.length} books.</p>
			)}
		</>
	);
};

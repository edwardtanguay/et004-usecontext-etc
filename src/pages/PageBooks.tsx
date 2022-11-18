import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	const { books, booksAreLoading } = useContext(AppContext);

	return (
		<div className="page pageBooks">
			<p>This is the Books page.</p>

			{booksAreLoading ? (
				<div className="loading">Loading...</div>
			) : (
				<div className="books">
					{books.map((book) => {
						return (
							<div className="book" key={book.id}>
								<img
									src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
								/>
								<div className="info">
									<div className="title">{book.title}</div>
									<div className="description">
										{book.description}
									</div>
									<div className="language">
										{book.language}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

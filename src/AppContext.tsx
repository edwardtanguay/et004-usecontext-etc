import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';

const booksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json';

interface IBook {
	id: number;
	idCode: string;
	title: string;
	description: string;
	language: string;
}

interface IAppContext {
	appTitle: string;
	books: IBook[]
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [books, setBooks] = useState<IBook[]>([]);
	const appTitle = "The Study Group";

	useEffect(() => {
		(async () => {
			const rawBooks = (await axios.get(booksUrl)).data;
			const _books:IBook[] = [];
			rawBooks.forEach((rawBook: any) => {
				const _book: IBook = {
					id: rawBook.id,
					idCode: rawBook.idCode,
					title: rawBook.title,
					description: rawBook.description,
					language: rawBook.language === '' ? 'English' : 'French'
				}
				_books.push(_book);
			});
			setBooks(_books);
		})();
	}, []);
	
	return (
		<AppContext.Provider value={{
			appTitle,
			books
		}}>
			{children}
		</AppContext.Provider>
	)
}
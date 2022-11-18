import { createContext } from 'react';

interface IAppContext {
	appTitle: string;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	
	const appTitle = "The Study Group";
	
	return (
		<AppContext.Provider value={{
			appTitle
		}}>
			{children}
		</AppContext.Provider>
	)
}
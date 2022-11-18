import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	
	const appTitle = "The Study Group";
	
	return (
		<AppContext.Provider value={{
			appTitle
		}}>
			{children}
		</AppContext.Provider>
	)
}
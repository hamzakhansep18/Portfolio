import { useState, createContext } from 'react';
import { projectsData } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		projectsData
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;

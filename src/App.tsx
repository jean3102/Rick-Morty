import { Route, Routes } from 'react-router-dom';
import CharacterCard from './components/CharacterCard';

const App = () => {
	return (
		<>
		
			<Routes>
				<Route
					path="/:page?"
					element={<CharacterCard />}
				/>
			</Routes>
		</>
	);
};

export default App;

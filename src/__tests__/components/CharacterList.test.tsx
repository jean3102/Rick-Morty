import { render, screen } from '@testing-library/react';
import mockCharacters from '@/json/characters.json';
import CharacterList from '@/components/CharacterList';

describe('<CharacterList/>', () => {
	test('check if all images in the list if rendered', () => {
		render(<CharacterList characters={mockCharacters.results} />);
		const characterList = screen.getAllByRole('img');
		expect(characterList.length).toBe(mockCharacters.results.length);
	});
});

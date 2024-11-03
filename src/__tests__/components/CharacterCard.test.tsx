import CharacterCard from '@/components/CharacterCard';
import useCharacterList from '@/hooks/useCharacterList';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import mockCharacters from '@/json/characters.json';

jest.mock('@/hooks/useCharacterList');
const mockUseCharacterList = useCharacterList as jest.Mock;
describe('CharacterCard', () => {

	beforeEach(() => {
		//* Reset all mocks before each test
		jest.clearAllMocks();
	});

	test('should show the title', async () => {
		mockUseCharacterList.mockReturnValueOnce({
			characters: [],
			loading: false,
			error: '',
		});

		render(
			<MemoryRouter>
				<CharacterCard />
			</MemoryRouter>
		);

		const title = 'The Rick and Morty API';

		await waitFor(() =>
			expect(
				screen.getByRole('heading', { name: title, level: 1 })
			).toBeInTheDocument()
		);
	});

	test('displays loading text when loading', async () => {
		mockUseCharacterList.mockReturnValueOnce({
			characters: [],
			loading: true,
			error: '',
		});

		render(
			<MemoryRouter>
				<CharacterCard />
			</MemoryRouter>
		);

		expect(screen.getByText(/Loading..../i)).toBeInTheDocument();
	});

	test('should display error message if error exist', async () => {
		const errorMessage = 'Failed to fetch characters';
		mockUseCharacterList.mockReturnValueOnce({
			characters: mockCharacters.results,
			loading: false,
			error: errorMessage,
		});

		render(
			<MemoryRouter>
				<CharacterCard />
			</MemoryRouter>
		);

		expect(screen.getByText(errorMessage)).toBeInTheDocument();
	});

	test('should display "data no found" if no characters are available', () => {
		mockUseCharacterList.mockReturnValueOnce({
			characters: [],
			loading: false,
			error: '',
		});

		render(
			<MemoryRouter>
				<CharacterCard />
			</MemoryRouter>
		);

		expect(
			screen.getByRole('heading', { name: 'Data no found', level: 2 })
		).toBeInTheDocument();
	});

	test('should display buttons previous and next if data exist', () => {
		mockUseCharacterList.mockReturnValueOnce({
			characters: mockCharacters.results,
			loading: false,
			error: '',
		});

		render(
			<MemoryRouter>
				<CharacterCard />
			</MemoryRouter>
		);

		expect(screen.getByText(/previous/i)).toBeInTheDocument();
		expect(screen.getByText(/next/i)).toBeInTheDocument();
	});
});

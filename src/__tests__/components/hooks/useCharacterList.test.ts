import useCharacterList from '@/hooks/useCharacterList';
import { getCharacters } from '@/services/getCharacters';
import { renderHook, waitFor } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({ useSearchParams: jest.fn() }));
jest.mock('@/services/getCharacters');
describe('useCharacterList', () => {
	const mockUseSearchParams = useSearchParams as jest.Mock;
	const mockGetCharacters = getCharacters as jest.Mock;
	const mockCharacters = {
		id: 1,
		name: 'Rick Sanchez',
		status: 'Alive',
		species: 'Human',
	};

	beforeEach(() => {
		jest.clearAllMocks();
		mockUseSearchParams.mockReturnValue([new URLSearchParams({ page: '1 ' })]);
	});

	test('should set loading to true initially and then false after fetching data', async () => {
		mockGetCharacters.mockResolvedValueOnce({ results: mockCharacters });

		const { result } = renderHook(() => useCharacterList());

		//* Initially, load should be true
		expect(result.current.loading).toBe(true);

		//*Wait for loading to complete
		await waitFor(() => expect(result.current.loading).toBe(false));
	});

	test('set character on successfully', async () => {
		mockGetCharacters.mockResolvedValueOnce({ results: mockCharacters });

		const { result } = renderHook(() => useCharacterList());

		await waitFor(() =>
			expect(result.current.characters).toStrictEqual(mockCharacters)
		);
	});

	test('set error on fetch failure', async () => {
		const errorMessage = 'Failed to fetch character';
		mockGetCharacters.mockRejectedValueOnce(new Error(errorMessage));

		const { result } = renderHook(() => useCharacterList());
		await waitFor(() => {
			expect(result.current.error).toBe(errorMessage);
		});

		expect(result.current.characters).toStrictEqual([]);
		expect(result.current.loading).toBe(false);
	});
});

import { getCharacters } from '@/services/getCharacters';

describe('getCharacters', () => {
	const mockFetch = jest.spyOn(global, 'fetch');

	const mockResponse = {
		info: {
			count: 826,
			pages: 42,
			next: 'https://rickandmortyapi.com/api/character/?page=2',
			prev: null,
		},
		results: [
			{
				id: 1,
				name: 'Rick Sanchez',
				status: 'Alive',
				species: 'Human',
			},
		],
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('fetches data successfully for valid page', async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockResponse,
		} as Response);

		const data = await getCharacters(1);
		expect(data).toEqual(mockResponse);
		expect(mockFetch).toHaveBeenCalledWith(
			'https://rickandmortyapi.com/api/character/?page=1'
		);
	});

	test('throws error if response status is false', () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
		} as Response);

		expect(getCharacters(909)).rejects.toThrow('🙅 There is nothing here');
	});

	test('throws error if page is NaN', () => {
		expect(getCharacters(NaN)).rejects.toThrow(
			'❌An error occurred while navigating to another page'
		);

		expect(mockFetch).not.toHaveBeenCalled();
	});
});

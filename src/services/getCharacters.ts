import { GetCharacters } from '@/models/getCharacters.model';

export const getCharacters = async (page: number): Promise<GetCharacters> => {
	if (isNaN(page) || page < -1)
		throw new Error('❌An error occurred while navigating to another page');

	const response = await fetch(
		`https://rickandmortyapi.com/api/character/?page=${page}`
	);

	if (!response.ok) {
		throw new Error(`🙅 There is nothing here`);
	}

	return await response.json();
};

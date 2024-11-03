import { CharacterListModel } from '@/models/characterList.model';
import { getCharacters } from '@/services/getCharacters';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCharacterList = () => {
	const [characters, setCharacter] = useState<CharacterListModel[]>([]);
	const [error, setError] = useState<string | null>('');
	const [loading, setLoading] = useState(false);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		setLoading(true);
		getCharacters(Number(searchParams.get('page')))
			.then((res) => {
				setCharacter(res.results);
			})
			.catch((err) => {
				setError((err as Error).message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [searchParams]);

	return { characters, loading, error };
};

export default useCharacterList;

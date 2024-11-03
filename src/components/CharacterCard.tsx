import useCharacterList from '@/hooks/useCharacterList';
import PaginationCharacter from './PaginationCharacter';
import CharacterList from './CharacterList';
import './styles/characterCard.style.css';

const CharacterCard = () => {
	const { characters, loading, error } = useCharacterList();
	if (error) return <p className="errorMessage">{error}</p>;

	return (
		<section className="characterCard">
			<h1>The Rick and Morty API</h1>
			{loading ? (
				<h2>Loading....</h2>
			) : (
				<>
					<CharacterList characters={characters} />
					{characters.length > 0 ? <PaginationCharacter /> : ''}
				</>
			)}
		</section>
	);
};

export default CharacterCard;

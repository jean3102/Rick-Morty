import { CharacterListModel } from '@/models/characterList.model';
import './styles/characterList.style.css';
interface CharacterListProps {
	characters: CharacterListModel[];
}

const CharacterList = ({ characters }: CharacterListProps) => {
	if (characters.length === 0) return <h2>Data no found</h2>;

	return (
		<ul className="characterList">
			{characters?.map(({ id, image, name, species, status, location }) => (
				<li key={id}>
					<figure>
						<img
							alt={name}
							src={image}
						/>
						<figcaption>
							<ul>
								<li>
									<h3>{name}</h3>
								</li>
								<li>
									<span className={status}></span>
									<span>{status}</span>
									<span> - {species}</span>
								</li>
								<li>Last known location:</li>
								<li>{location.name}</li>
							</ul>
						</figcaption>
					</figure>
				</li>
			))}
		</ul>
	);
};

export default CharacterList;

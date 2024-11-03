export interface CharacterListModel {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: CharacterListOrigin;
	location: CharacterListLocation;
	image: string;
	episode: string[];
	url: string;
	created: string;
}

interface CharacterListOrigin {
	name: string;
	url: string;
}

interface CharacterListLocation {
	name: string;
	url: string;
}

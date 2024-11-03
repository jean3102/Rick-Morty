import { CharacterListModel } from './characterList.model';

export interface GetCharacters {
	info: GetCharacterInfo;
	results: CharacterListModel[];
}

interface GetCharacterInfo {
	count: number;
	pages: number;
	next: string;
	prev: null | number;
}

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { environment } from '../../../environments';
import { Character, Info, Responce } from '../../types';

interface CharactersState {
	info: Info;
	characters: Character[];
	modalOpen: boolean;
	character: Character | null;

	setModal: () => void;

	fetchCharacters: (url?: string) => void;
}

export const useCharactersStore = create<CharactersState>()(
	devtools((set, get) => ({
		info: {
			count: 0,
			pages: 0,
			next: '',
			prev: '',
		},
		characters: [],
		modalOpen: false,
		character: null,

		setModal: () => {
			set({
				character: get().characters.find(
					(character) => character.id === +sessionStorage.character
				),
				modalOpen: !get().modalOpen,
			});
		},

		fetchCharacters: async (url) => {
			if (url !== null)
				await fetch(url || environment.baseUrl + '/character')
					.then((res) => res.json())
					.then((res: Responce) =>
						set({
							characters: [...get().characters, ...res.results],
							info: res.info,
						})
					);
		},
	}))
);

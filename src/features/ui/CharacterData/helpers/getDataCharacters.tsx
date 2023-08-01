import { CharacterCard } from '../../CharacterCard';
import { Character } from '../../../../shared/types';

export const getDataCharacters = (data: Character[]) =>
	data.map(({ name, image, id }) => (
		<CharacterCard img={image} text={name} key={name + id} id={id} />
	));

import { Space } from 'antd';
import { useCharactersStore } from '../../../shared/store/app';
import { getDataCharacters } from './helpers';

export const CharacterData = () => {
	const characters = useCharactersStore((state) => state.characters);

	return (
		<Space
			size={[20, 70]}
			wrap
			style={{ width: '100%', justifyContent: 'center', marginTop: 70 }}
		>
			{getDataCharacters(characters)}
		</Space>
	);
};

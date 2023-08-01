import { Card, Image } from 'antd';
import { useCharactersStore } from '../../../shared/store/app';
import Meta from 'antd/es/card/Meta';

interface IProps {
	img: string;
	text: string;
	id: number;
}

export const CharacterCard = ({ img, text, id }: IProps) => {
	const setModal = useCharactersStore((state) => state.setModal);

	const handleClick = () => {
		sessionStorage.character = id;
		setModal();
	};

	return (
		<Card
			hoverable
			onClick={() => handleClick()}
			style={{
				width: '100%',
				textAlign: 'center',
				display: 'inline-block',
			}}
		>
			<Image
				width={280}
				src={img}
				preview={false}
				style={{
					paddingInline: 25,
					position: 'relative',
					top: -50,
					margin: '0 auto',
				}}
			/>
			<Meta title={text} />
		</Card>
	);
};

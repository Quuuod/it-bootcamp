import { Modal } from 'antd';
import { useCharactersStore } from '../../../shared/store/app';
import { ModalData } from '../ModalData/ModalData';

export const CharacterModal = () => {
	const modalOpen = useCharactersStore((state) => state.modalOpen);
	const setModal = useCharactersStore((state) => state.setModal);
	const character = useCharactersStore((state) => state.character);

	const handleCancel = () => {
		setModal();
	};

	if (!character) return <></>;

	const { name, status, species, origin, location, gender, image } = character;

	return (
		<Modal
			open={modalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
			getContainer={false}
			width={700}
			bodyStyle={{
				background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%), url(${image}) no-repeat left/auto 100%`,
				minHeight: 260,
			}}
		>
			<div
				style={{
					display: 'inline-flex',
					width: '42%',
				}}
			></div>

			<ModalData
				name={name}
				origin={origin.name}
				status={status}
				location={location.name}
				species={species}
				gender={gender}
			/>
		</Modal>
	);
};

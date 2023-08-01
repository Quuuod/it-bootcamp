import { Space } from 'antd';

interface IProps {
	name: string;
	origin: string;
	status: string;
	location: string;
	species: string;
	gender: string;
}

export const ModalData = ({
	name,
	origin,
	status,
	location,
	species,
	gender,
}: IProps) => {
	return (
		<Space
			size={[25, 5]}
			wrap
			align='start'
			style={{
				display: 'inline-flex',
				width: '58%',
				justifyContent: 'normal',
			}}
		>
			<div>
				<h3>Name:</h3>
				<span>{name}</span>
			</div>
			<div>
				<h3>Origin:</h3>
				<span>{origin}</span>
			</div>
			<div>
				<h3>Status:</h3>
				<span>{status}</span>
			</div>
			<div>
				<h3>Location:</h3>
				<span>{location}</span>
			</div>
			<div>
				<h3>Species:</h3>
				<span>{species}</span>
			</div>
			<div>
				<h3>Gender:</h3>
				<span>{gender}</span>
			</div>
		</Space>
	);
};

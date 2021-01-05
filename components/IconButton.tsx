import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Btn = styled.button`
	display: inline;
	cursor: pointer;
	background: none;
	border: none;
	color: none;
	outline: none;
`;

export interface Props {
	icon: string;
	onClick?: () => void;
}

const IconButton: FC<Props> = ({ icon, onClick }) => {
	return (
		<Btn onClick={onClick}>
			<Image src={icon} alt='Icon Button' width={24} height={24} />
		</Btn>
	);
};

export default IconButton;

import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
interface Props {
	icon: string;
	onClick?: () => void;
}

const Btn = styled.button`
	display: inline;
	cursor: pointer;
	background: none;
	border: none;
	color: none;
	outline: none;
`;

const IconButton: FC<Props> = ({ icon, onClick }) => {
	return (
		<Btn onClick={onClick}>
			<Image src={icon} alt='Icon Button' width={24} height={24} />
		</Btn>
	);
};

export default IconButton;

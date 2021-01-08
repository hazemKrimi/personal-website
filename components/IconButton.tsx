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
`;

const IconButton: FC<Props & { className?: string }> = ({ icon, onClick, className }) => {
	return (
		<Btn onClick={onClick} className={className}>
			<Image src={icon} width={24} height={24} />
		</Btn>
	);
};

export default IconButton;

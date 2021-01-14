import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
interface Props {
	icon: string;
	width?: number;
	height?: number;
	onClick?: () => void;
}

const Btn = styled.button`
	cursor: pointer;
	background: none;
	border: none;
	display: inline-flex;
	align-items: center;
`;

const IconButton: FC<Props & { className?: string }> = ({
	icon,
	onClick,
	className,
	width = 24,
	height = 24
}) => {
	return (
		<Btn onClick={onClick} className={className}>
			<Image src={icon} width={width} height={height} />
		</Btn>
	);
};

export default IconButton;

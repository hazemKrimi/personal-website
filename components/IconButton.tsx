import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	icon: string;
	width?: number;
	height?: number;
	href?: string;
	target?: HTMLAnchorElement['target'];
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
	href,
	target,
	onClick,
	className,
	width = 24,
	height = 24
}) => {
	return !href ? (
		<Btn onClick={onClick} className={className}>
			<Image src={icon} width={width} height={height} />
		</Btn>
	) : (
		<Link href={href} passHref>
			<Btn as='a' target={target} onClick={onClick} className={className}>
				<Image src={icon} width={width} height={height} />
			</Btn>
		</Link>
	);
};

export default IconButton;

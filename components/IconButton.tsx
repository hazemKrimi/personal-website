import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	alt: string;
	icon: string;
	width?: number;
	height?: number;
	href?: string;
	target?: HTMLAnchorElement['target'];
	onClick?: () => void;
}

const Btn = styled(Link)`
	cursor: pointer;
	background: none;
	border: none;
	display: inline-flex;
	align-items: center;
`;

const IconButton: FC<Props & { className?: string }> = ({
	alt,
	icon,
	href,
	target,
	onClick,
	className,
	width = 24,
	height = 24
}) => {
	return !href ? (
		<Btn href='#' onClick={onClick} className={className}>
			<Image alt={alt} src={icon} width={width} height={height} />
		</Btn>
	) : (
		<Btn href={href} target={target} onClick={onClick} className={className}>
			<Image alt={alt} src={icon} width={width} height={height} />
		</Btn>
	);
};

export default IconButton;

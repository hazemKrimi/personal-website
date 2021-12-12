import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
	variant?: 'outline' | 'text';
	href: string;
	target?: HTMLAnchorElement['target'];
	onClick?: () => void;
	dark?: boolean;
}

const Btn = styled.button<Omit<Props, 'href'>>`
	position: relative;
	display: inline;
	cursor: pointer;
	background: none;
	color: var(--text);
	border: ${({ variant }) => (variant === 'outline' ? '2px solid var(--text)' : 'none')};
	font-weight: bold;
	font-size: ${({ variant }) => (variant === 'outline' ? '1.05rem' : 'inherit')};
	text-transform: ${({ variant }) => (variant === 'outline' ? 'uppercase' : 'inherit')};
	padding: ${({ variant }) => (variant === 'outline' ? '.5rem 1rem' : '0rem')};
	text-align: left;
	text-decoration: none;
	transition: color 250ms ease-in-out;
	z-index: 1;

	@media (max-width: 768px) {
		padding: ${({ variant }) => (variant === 'outline' ? '.5rem .75rem' : '0rem')};
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
		background-color: ${({ variant }) => (variant === 'outline' ? 'var(--text)' : 'inherit')};
		transition: transform 250ms ease-in-out;
		transform: scaleX(0);
		transform-origin: left;
	}

	&:hover {
		@media (min-width: 768px) {
			color: ${({ variant }) => (variant === 'outline' ? 'var(--background)' : 'inherit')};
		}
	}

	&:hover::before {
		transform: scaleX(1);
	}
`;

const Button: FC<Props & { className?: string }> = ({
	variant = 'text',
	href,
	target,
	onClick,
	children,
	className
}) => {
	const { dark } = useContext(DarkModeContext);

	return (
		<Link href={href} passHref>
			<Btn
				as='a'
				target={target}
				variant={variant}
				dark={dark}
				onClick={onClick}
				className={className}
			>
				{children}
			</Btn>
		</Link>
	);
};

export default Button;

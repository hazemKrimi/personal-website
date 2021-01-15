import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';

interface Props {
	variant?: 'outline' | 'text' | 'action';
	link?: string;
	dark?: boolean;
}

const Btn = styled.button<Props>`
	cursor: pointer;
	display: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? 'block' : 'inline'};
	width: ${({ variant }) => (['action', 'outline'].includes(variant as string) ? '100%' : 'auto')};
	background: ${({ variant }) => (variant === 'action' ? '#3F9AEE' : 'none')};
	color: ${({ variant, dark }) => (variant === 'action' ? 'white' : dark ? 'white' : 'black')};
	border: ${({ variant, dark }) =>
		variant === 'outline' ? `2px solid ${dark ? 'white' : 'black'}` : 'none'};
	font-weight: bold;
	font-size: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? '1.05rem' : 'inherit'};
	text-transform: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? 'uppercase' : 'inherit'};
	padding: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? '.5rem 1rem' : '0rem'};
	text-align: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? 'center' : 'left'};
	transition: color 250ms ease-in-out;

	@media (max-width: 768px) {
		padding: ${({ variant }) =>
			['action', 'outline'].includes(variant as string) ? '.5rem .75rem' : '0rem'};
	}
`;

const MDXButton: FC<Props & { className?: string }> = ({
	variant = 'text',
	link,
	children,
	className
}) => {
	const { dark } = useContext(DarkModeContext);

	return (
		<Btn
			variant={variant}
			dark={dark}
			onClick={() => {
				if (link) window.open(link, '_blank');
			}}
			className={className}
		>
			{children}
		</Btn>
	);
};

export default MDXButton;
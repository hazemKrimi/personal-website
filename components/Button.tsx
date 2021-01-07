import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';
interface Props {
	variant?: 'outline' | 'text' | 'action';
	onClick?: () => void;
	dark?: boolean;
}

const Btn = styled.button<Props>`
	position: relative;
	display: inline;
	cursor: pointer;
	background: none;
	outline: none;
	color: ${({ dark, theme }) => (dark ? theme.colors.dark.text : theme.colors.light.text)};
	padding: 1rem;
	border: ${({ variant, dark, theme }) =>
		variant === 'outline'
			? `2px solid ${dark ? theme.colors.dark.text : theme.colors.light.text}`
			: 'none'};
	font-weight: bold;
	font-size: ${({ variant }) => (variant === 'outline' ? '1.05rem' : 'inherit')};
	text-transform: ${({ variant }) => (variant === 'outline' ? 'uppercase' : 'inherit')};
	padding: ${({ variant }) => (variant === 'outline' ? '.5rem 1rem' : '0rem')};

	transition: color 250ms ease-in-out;
	z-index: 1;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
		background-color: ${({ variant, dark, theme }) =>
			variant === 'outline'
				? dark
					? theme.colors.dark.text
					: theme.colors.light.text
				: 'inherit'};
		transition: transform 250ms ease-in-out;
		transform: scaleX(0);
		transform-origin: left;
	}

	&:hover {
		color: ${({ variant, dark, theme }) =>
			variant === 'outline'
				? dark
					? theme.colors.dark.background
					: theme.colors.light.background
				: 'inherit'};
	}

	&:focus {
		color: ${({ variant, dark, theme }) =>
			variant === 'outline'
				? dark
					? theme.colors.dark.background
					: theme.colors.light.background
				: 'inherit'};
	}

	&:hover::before {
		transform: scaleX(1);
	}

	&:focus::before {
		transform: scaleX(1);
	}
`;

const Button: FC<Props> = ({ variant = 'text', onClick, children }) => {
	const { dark } = useContext(DarkModeContext);

	return (
		<Btn variant={variant} dark={dark} onClick={onClick}>
			{children}
		</Btn>
	);
};

export default Button;

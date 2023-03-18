import styled from 'styled-components';
import Link from 'next/link';
import { Props } from './types';

export const StyledButton = styled(Link)<Props>`
	position: relative;
	display: inline;
	cursor: pointer;
	background: none;
	color: var(--text);
	border: ${({ variant }) =>
		variant === 'outline' ? '2px solid var(--text)' : '2px solid transparent'};
	font-weight: bold;
	text-transform: ${({ variant }) => (variant === 'outline' ? 'uppercase' : 'inherit')};
	padding: ${({ variant }) => (variant === 'outline' ? '.5rem 1rem' : '0rem')};
	text-align: left;
	text-decoration: none;
	transition: color 250ms ease-in-out, border 250ms ease-in-out;
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
		color: ${({ variant }) => (variant === 'outline' ? 'var(--background)' : 'inherit')};
		border: 2px solid transparent;
	}

	&:hover::before {
		transform: scaleX(1);
	}
`;

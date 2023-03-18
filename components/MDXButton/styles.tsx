import Link from 'next/link';
import styled from 'styled-components';
import { Props } from './types';

export const Btn = styled(Link)<Props>`
	cursor: pointer;
	display: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? 'block' : 'inline'};
	width: ${({ variant }) => (['action', 'outline'].includes(variant as string) ? '100%' : 'auto')};
	/* TODO: fix theme blue color problem */
	background: ${({ variant }) => (variant === 'action' ? '#1573CA' : 'none')};
	color: ${({ variant, mode }) =>
		variant === 'action' ? 'white' : mode === 'dark' ? 'white' : 'black'};
	border: ${({ variant, mode }) =>
		variant === 'outline' ? `2px solid ${mode === 'dark' ? 'white' : 'black'}` : 'none'};
	font-weight: bold;
	font-size: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? '1.05rem' : 'inherit'};
	text-transform: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? 'uppercase' : 'inherit'};
	padding: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? '.5rem 1rem' : '0rem'};
	text-align: ${({ variant }) =>
		['action', 'outline'].includes(variant as string) ? 'center' : 'left'};
	text-decoration: none;
	transition: color 250ms ease-in-out;

	${({ disabled }) =>
		disabled &&
		`
		background: gray;
		cursor: default;
	`}

	@media (max-width: 768px) {
		padding: ${({ variant }) =>
			['action', 'outline'].includes(variant as string) ? '.5rem .75rem' : '0rem'};
	}
`;

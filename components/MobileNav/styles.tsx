import styled from 'styled-components';
import { StyledProps } from './types';

export const Bar = styled.nav<StyledProps>`
	position: fixed;
	z-index: 2;
	top: 0;
	right: 0;
	transform-origin: right;
	transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
	width: 80%;
	height: 100vh;
	background: var(--text);
	transition: transform 250ms ease-in-out;
	display: grid;
	grid-template-rows: 30% repeat(4, 50px);
	padding: 1rem 1rem 5rem 1rem;

	@media (orientation: landscape) {
		grid-template-rows: auto;
	}

	.close {
		justify-self: flex-end;
		align-self: flex-start;
		margin-top: 0.5rem;
	}

	.mobile-button-wrapper {
		display: flex;
		margin: 0rem 1rem;

		a {
			color: var(--text-inverted) !important;
		}
	}
`;

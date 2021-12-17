import styled from 'styled-components';

export const Bar = styled.nav`
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	padding: 1rem 0rem;

	* {
		user-select: none;
	}

	h1 {
		font-size: 1.7rem;

		@media (max-width: 768px) {
			font-size: 1rem;
		}
	}

	div,
	a.logo {
		display: grid;
		align-items: center;
		column-gap: 1rem;

		@media (max-width: 768px) {
			column-gap: 0.5rem;
		}
	}

	a.logo {
		text-decoration: none;
		color: var(--text);
		cursor: pointer;
		grid-template-columns: repeat(2, auto);
		justify-content: flex-start;
	}

	.buttons {
		grid-template-columns: repeat(5, auto);
		justify-content: flex-end;

		@media (max-width: 768px) {
			display: none;
		}
	}

	.mobile-buttons {
		display: none;

		@media (max-width: 768px) {
			display: grid;
			grid-template-columns: repeat(2, auto);
			justify-content: flex-end;
		}
	}
`;

import styled from 'styled-components';

export const StyledCard = styled.div<{ image: boolean }>`
	cursor: pointer;
	width: 100%;
	display: grid;
	grid-template-columns: auto 150px;
	align-items: stretch;
	transition: color 0ms ease-in-out;
	text-decoration: none;
	color: var(--text);

	&:hover {
		& > div {
			background: ${({ theme }) => theme.colors.blue};

			* {
				color: ${({ theme }) => theme.colors.dark.text} !important;
			}
		}

		img {
			filter: ${({ image }) => (image ? 'grayscale(80%)' : 'none')};
		}
	}

	& > div {
		padding: 1rem 0rem;
		background: var(--secondary-background);
		display: grid;
		row-gap: 0.5rem;

		@media (max-width: 768px) {
			padding: 0.75rem 0rem;
		}
	}

	h3,
	p,
	.tags-wrapper {
		padding: 0rem 1rem;

		@media (max-width: 768px) {
			padding: 0rem 0.5rem;
		}
	}

	h3 {
		font-size: 1.3rem;
	}

	.tags-wrapper {
		display: flex;
		flex-direction: row;
		align-content: center;
		flex-wrap: wrap;
	}

	span {
		font-size: 0.7rem;
	}
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 45vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	height: auto;
	text-align: left;

	@media (max-width: 425px) {
		min-height: 65vh;
		grid-template-columns: auto;

		.illustration {
			display: none;
		}
	}

	h2 {
		font-size: 1.5rem;

		@media (min-width: 1440px) {
			font-size: 2rem;
		}

		@media (min-width: 2560px) {
			font-size: 3.5rem;
		}
	}

	.small {
		font-size: 1rem;
		font-weight: normal;

		@media (min-width: 1440px) {
			font-size: 1.5rem;
		}
	}

	.blue {
		color: ${({ theme }) => theme.colors.blue};
	}
`;

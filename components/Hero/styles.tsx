import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 45vh;
	display: grid;
	grid-template-columns: 1fr 32.188rem;
	align-items: center;
	height: auto;
	text-align: left;

	@media (max-width: 1024px) {
		min-height: 35vh;
		grid-template-columns: 1fr;

		.photo {
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

	.blue {
		color: ${({ theme }) => theme.colors.blue};
	}
`;

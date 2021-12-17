import styled from 'styled-components';

export const Wrapper = styled.div<{ dark: boolean }>`
	padding: 1rem 0rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 2rem;

	@media (max-width: 768px) {
		padding: 0rem;
		grid-template-columns: auto;
		column-gap: 0rem;
		row-gap: 1rem;
	}

	.photo {
		order: initial;

		@media (max-width: 768px) {
			order: -1;
		}
	}

	h1 {
		font-size: 1.7rem;
	}

	.content {
		display: flex;
		flex-direction: column;
	}

	.about,
	.contact {
		margin: 1rem 0rem;

		@media (max-width: 768px) {
			margin: 1rem 0rem;
		}
	}

	.success {
		color: #73d26b;
		align-self: center;
		font-weight: normal;
	}

	.contact {
		display: grid;
		grid-template-columns: auto;
		row-gap: 1.5rem;

		.error {
			color: #d75050;
		}

		@media (max-width: 768px) {
			row-gap: 0.5rem;
		}
	}
`;

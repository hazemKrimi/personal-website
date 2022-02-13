import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 75vh;
	padding: 1rem 0rem;

	.back {
		cursor: pointer;
		text-align: left;
		display: inline-flex;
		align-items: center;

		span {
			color: ${({ theme }) => theme.colors.blue} !important;
		}
	}

	h1 {
		font-size: 1.7rem;
		margin-bottom: 1rem;
	}

	h4 {
		font-size: 1.3rem;
		grid-column: 1 / -1;
		align-self: center;
		justify-self: center;
	}

	.projects-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
		grid-auto-rows: minmax(6.25rem, auto);
		align-items: stretch;
		justify-items: center;
		gap: 1rem;
	}
`;

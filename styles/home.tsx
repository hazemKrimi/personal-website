import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 1rem 0rem;
	display: grid;
	grid-template-columns: auto;
	row-gap: 1rem;

	h1 {
		display: inline;
		font-size: 1.7rem;
		margin-right: 1rem;
	}

	h4 {
		font-size: 1.3rem;
		grid-column: 1 / -1;
		align-self: center;
		justify-self: center;
	}

	.blue {
		color: ${({ theme }) => theme.colors.blue};

		@media (max-width: 768px) {
			margin-top: 0.5rem;
		}
	}

	.about,
	.projects,
	.blog {
		margin: 1rem 0rem;
	}

	.projects {
		margin-bottom: 3rem;
	}

	.projects-wrapper,
	.articles-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
		grid-auto-rows: minmax(6.25rem, auto);
		align-items: stretch;
		justify-items: center;
		gap: 1rem;
	}
`;

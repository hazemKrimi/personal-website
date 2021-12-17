import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 75vh;
	padding: 1rem 0rem;

	.back {
		cursor: pointer;
		text-align: left;
		color: #3f9aee;
		display: inline-flex;
		align-items: center;
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

	.articles-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: minmax(100px, auto);
		align-items: stretch;
		justify-items: center;
		gap: 1rem;
	}
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 75vh;
	display: grid;
	justify-items: center;
	text-align: center;

	@media (max-width: 768px) {
		min-height: 65vh;
	}

	h1 {
		font-size: 1.7rem;
		align-self: flex-end;
	}

	.back {
		cursor: pointer;
		color: #3f9aee;
		display: flex;
		align-items: center;
		align-self: flex-start;
	}
`;

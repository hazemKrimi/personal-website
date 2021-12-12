import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
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

const Hero: FC = () => {
	const { dark } = useContext(DarkModeContext);

	return (
		<Wrapper>
			<div className='intro'>
				<h2>Hi, I am Hazem</h2>
				<h2>I Like Building Things</h2>
				<h2 className='blue'>Software Developer</h2>
				<h2 className='blue'>Life Long Learner</h2>
			</div>
			<div className='illustration'>
				<Image
					src={dark ? '/dark-illustration.svg' : '/light-illustration.svg'}
					width='100%'
					height='100%'
					layout='responsive'
				/>
			</div>
		</Wrapper>
	);
};

export default Hero;

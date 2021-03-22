import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

const Wrapper = styled.div`
	min-height: 45vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	height: auto;
	text-align: left;

	@media (max-width: 768px) {
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

	.green {
		color: #73d26b;
	}
`;

const Hero: FC = () => {
	const { dark } = useContext(DarkModeContext);

	return (
		<Wrapper>
			<Typing speed={15} hideCursor={true} loop={false} className='intro'>
				<h2>Hi, I am Hazem</h2>
				<h2>I Like Building Things</h2>
				<h2 className='green'>
					Software Developer ✔️<span className='small'>check</span>
				</h2>
				<h2 className='green'>
					Designer ✔️
					<span className='small'>check</span>
				</h2>
				<h2 className='green'>
					Hard Working ✔️
					<span className='small'>check</span>
				</h2>
				<h2 className='green'>
					Life Long Learner ✔️<span className='small'>check</span>
				</h2>
			</Typing>
			<div className='illustration'>
				<img
					src={dark ? '/light-illustration.svg' : '/dark-illustration.svg'}
					width='100%'
					height='auto'
					alt='Illustration'
				/>
			</div>
		</Wrapper>
	);
};

export default Hero;

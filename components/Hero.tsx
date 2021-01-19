import { FC } from 'react';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

const Wrapper = styled.div`
	min-height: 45vh;
	display: grid;
	align-items: center;
	height: auto;
	text-align: center;

	@media (max-width: 768px) {
		min-height: 65vh;
	}

	h2 {
		font-size: 1.5rem;
	}

	.small {
		font-size: 1rem;
		font-weight: normal;
	}

	.green {
		color: #73d26b;
	}

	.orange {
		color: #d6a356;
	}

	.red {
		color: #d75050;
	}
`;

const Hero: FC = () => {
	return (
		<Wrapper>
			<Typing speed={15} hideCursor={true} loop={false}>
				<h2>Hi</h2>
				<h2>I Like Building Things</h2>
				<h2 className='green'>
					Software Developer ✔️<span className='small'>check</span>
				</h2>
				<h2 className='red'>
					Designer 🛑<span className='small'>error: need more practise and feedback</span>
				</h2>
				<h2 className='orange'>
					Hard Working ⚠️<span className='small'>warning: not always the case</span>
				</h2>
				<h2 className='green'>
					Life Long Learner ✔️<span className='small'>check</span>
				</h2>
			</Typing>
		</Wrapper>
	);
};

export default Hero;

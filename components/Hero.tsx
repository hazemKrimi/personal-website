import { FC } from 'react';
import styled from 'styled-components';
import Typing from 'react-typing-animation';

const Wrapper = styled.div`
	min-height: 45vh;
	display: grid;
	align-items: center;
	height: auto;

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
			<Typing speed={10} hideCursor={true} loop={false}>
				<h2>Hi.</h2>
				<h2>I Can Build Stuff.</h2>
				<h2 className='green'>
					Full Stack Developer ✔️<span className='small'>check</span>
				</h2>
				<h2 className='green'>
					Passionate ✔️<span className='small'>check</span>
				</h2>
				<h2 className='orange'>
					Hard Working ⚠️<span className='small'>warning: not always the case</span>
				</h2>
				<h2 className='red'>
					Designer 🛑<span className='small'>error: need more practise and feedback</span>
				</h2>
			</Typing>
		</Wrapper>
	);
};

export default Hero;

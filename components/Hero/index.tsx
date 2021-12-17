import { FC, useContext } from 'react';
import { DarkModeContext } from '../../components/DarkMode';
import { Wrapper } from './styles';
import Image from 'next/image';

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

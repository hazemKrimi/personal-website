import { FC } from 'react';
import { Wrapper } from './styles';
import Image from 'next/image';

const Hero: FC = () => (
	<Wrapper>
		<div className='intro'>
			<h2>Hi, I am Hazem</h2>
			<h2>I Like Building Things</h2>
			<h2 className='blue'>Software Developer</h2>
			<h2 className='blue'>Life Long Learner</h2>
		</div>
		<div className='photo'>
			<Image src='/photo.jpg' width={515} height={535} objectFit='cover' />
		</div>
	</Wrapper>
);

export default Hero;

import { Wrapper } from './styles';
import Image from 'next/image';

const Hero = () => (
  <Wrapper>
    <div className='intro'>
      <h2>Hi, I am Hazem</h2>
      <h2>I Like Building Software</h2>
      <h2 className='blue'>Full Stack TypeScript Developer</h2>
      <h2 className='blue'>Life Long Learner</h2>
    </div>
    <div className='photo'>
      <Image alt='Hazem Krimi' src='/photo.jpg' width={515} height={535} />
    </div>
  </Wrapper>
);

export default Hero;

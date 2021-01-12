import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';
import Image from 'next/image';
import IconButton from '../components/IconButton';

const Wrapper = styled.div<{ dark: boolean }>`
	padding: 1rem 0rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 2rem;

	@media (max-width: 768px) {
		padding: 0rem;
		grid-template-columns: auto;
		column-gap: 0rem;
		row-gap: 1rem;
	}

	.photo {
		order: initial;

		@media (max-width: 768px) {
			order: -1;
		}
	}

	h1 {
		font-size: 1.5rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.about,
	.contact {
		margin-top: 1rem;

		@media (max-width: 768px) {
			margin: 1rem 0rem;
		}
	}

	.contact {
		display: grid;
		grid-template-columns: repeat(auto-fill, 36px);
		column-gap: 1rem;
		align-items: center;
		justify-content: flex-start;

		@media (max-width: 768px) {
			column-gap: 0.5rem;
		}
	}
`;

const About: FC = () => {
	const { dark } = useContext(DarkModeContext);

	return (
		<Wrapper dark={dark}>
			<div className='content'>
				<div>
					<h1>About Me</h1>
					<div className='about'>
						<p>
							I am Hazem Krimi, a Full Stack JavaScript Developer helping companies and individuals
							build modern web and mobile applications I am a student and a freelance full stack
							developer. <br></br> I have a good experience building web and cross platform mobile
							apps using various technologies like React, React Native, Node.js, MongoDB, Firebase
							and I am constantly exploring and learning Software Engineering to make sure I get the
							job done faster and easier.
						</p>
					</div>
				</div>
				<div>
					<h1>Contact Me</h1>
					<div className='contact'>
						<IconButton
							icon={dark ? '/light-mail.svg' : '/dark-mail.svg'}
							width={36}
							height={36}
							onClick={() => window.open('mailto:krimihazem1@gmail.com', '_blank')}
						/>
						<IconButton
							icon={dark ? '/light-github.svg' : '/dark-github.svg'}
							width={36}
							height={36}
							onClick={() => window.open('https://github.com/hazemKrimi', '_blank')}
						/>
						<IconButton
							icon={dark ? '/light-twitter.svg' : '/dark-twitter.svg'}
							width={36}
							height={36}
							onClick={() => window.open('https://twitter.com/HazemKrimi', '_blank')}
						/>
						<IconButton
							icon={dark ? '/light-linkedin.svg' : '/dark-linkedin.svg'}
							width={36}
							height={36}
							onClick={() => window.open('https://linkedin.com/in/hazemkrimi', '_blank')}
						/>
						<IconButton
							icon={dark ? '/light-codepen.svg' : '/dark-codepen.svg'}
							width={36}
							height={36}
							onClick={() => window.open('https://codepen.io/hazemkrimi', '_blank')}
						/>
						<IconButton
							icon={dark ? '/light-dribbble.svg' : '/dark-dribbble.svg'}
							width={36}
							height={36}
							onClick={() => window.open('https://dribbble.com/HazemKrimi', '_blank')}
						/>
						<IconButton
							icon={dark ? '/light-instagram.svg' : '/dark-instagram.svg'}
							width={36}
							height={36}
							onClick={() => window.open('https://instagram.com/hazemkrimi', '_blank')}
						/>
					</div>
				</div>
			</div>
			<div className='photo'>
				<Image src='/logo.jpg' width='auto' height='auto' layout='responsive' />
			</div>
		</Wrapper>
	);
};

export default About;

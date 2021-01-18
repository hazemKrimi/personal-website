import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import Head from 'next/head';
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
		font-size: 1.7rem;
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

		* {
			user-select: none;
		}

		@media (max-width: 768px) {
			column-gap: 0.5rem;
		}
	}
`;

const About: FC = () => {
	const { dark } = useContext(DarkModeContext);

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='author' content='Hazem Krimi' />
				<meta
					name='description'
					content='Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
				/>
				<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
				<link rel='canonical' href='https://hazemkrimi.tech' />
				<meta property='og:image' content='/logo.jpg' />
				<meta
					property='og:description'
					content='Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
				/>
				<meta property='og:title' content='Hazem Krimi' />
				<meta
					name='keywords'
					content='Hazem, Krimi, Developer, Software, Engineer, Web, Mobile, Frontend, Backend, Fullstack, JavaScript, React.js, React Native, Node.js, Portfolio, Blog, Tutorials, Tech News'
				/>
				<title>About | Hazem Krimi</title>
			</Head>
			<Wrapper dark={dark}>
				<div className='content'>
					<div>
						<h1>About Me</h1>
						<div className='about'>
							<p>
								I am Hazem Krimi, a Full Stack JavaScript Developer helping companies and
								individuals build modern web and mobile applications I am a student and a freelance
								full stack developer. <br></br> I have a good experience building web and cross
								platform mobile apps using various technologies like React, React Native, Node.js,
								MongoDB, Firebase and I am constantly exploring and learning Software Engineering to
								make sure I get the job done faster and easier.
							</p>
						</div>
					</div>
					<div>
						<h1>Contact Me</h1>
						<div className='contact'>
							<IconButton
								icon={dark ? '/icons/light-mail.svg' : '/icons/dark-mail.svg'}
								width={36}
								height={36}
								onClick={() => window.open('mailto:me@hazemkrimi.tech', '_blank')}
							/>
							<IconButton
								icon={dark ? '/icons/light-github.svg' : '/icons/dark-github.svg'}
								width={36}
								height={36}
								onClick={() => window.open('https://github.com/hazemKrimi', '_blank')}
							/>
							<IconButton
								icon={dark ? '/icons/light-twitter.svg' : '/icons/dark-twitter.svg'}
								width={36}
								height={36}
								onClick={() => window.open('https://twitter.com/HazemKrimi', '_blank')}
							/>
							<IconButton
								icon={dark ? '/icons/light-linkedin.svg' : '/icons/dark-linkedin.svg'}
								width={36}
								height={36}
								onClick={() => window.open('https://linkedin.com/in/hazemkrimi', '_blank')}
							/>
							<IconButton
								icon={dark ? '/icons/light-codepen.svg' : '/icons/dark-codepen.svg'}
								width={36}
								height={36}
								onClick={() => window.open('https://codepen.io/hazemkrimi', '_blank')}
							/>
							<IconButton
								icon={dark ? '/icons/light-dribbble.svg' : '/icons/dark-dribbble.svg'}
								width={36}
								height={36}
								onClick={() => window.open('https://dribbble.com/HazemKrimi', '_blank')}
							/>
							<IconButton
								icon={dark ? '/icons/light-instagram.svg' : '/icons/dark-instagram.svg'}
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
		</>
	);
};

export default About;

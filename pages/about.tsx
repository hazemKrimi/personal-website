import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import Head from 'next/head';
import styled from 'styled-components';
import Image from 'next/image';

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
				<link rel='canonical' href='https://hazemkrimi.tech/about' />
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
								I am a software developer and a student. I have experience as a full stack developer
								but I lean more to the front end and I have built a lot of web apps and some mobile
								apps. Also, I am always learning and experimenting with new technologies (currently
								learning about the ethereum blockchain) and other topics other than software
								engineering.
							</p>
						</div>
					</div>
					<div>
						<h1>Contact Me</h1>
						<div className='contact'></div>
					</div>
				</div>
				<div className='photo'>
					<Image src='/picture.jpg' width='auto' height='auto' layout='responsive' />
				</div>
			</Wrapper>
		</>
	);
};

export default About;

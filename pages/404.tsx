import { FC } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';
import IconButton from '../components/IconButton';

const Wrapper = styled.div`
	min-height: 75vh;
	display: grid;
	justify-items: center;
	text-align: center;

	@media (max-width: 768px) {
		min-height: 65vh;
	}

	h1 {
		font-size: 1.7rem;
		align-self: flex-end;
	}

	.back {
		cursor: pointer;
		color: #3f9aee;
		display: flex;
		align-items: center;
		align-self: flex-start;
	}
`;

const NotFound: FC = () => {
	const router = useRouter();

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
				<link rel='canonical' href='https://hazemkrimi.tech/*' />
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
				<title>404 Not Found | Hazem Krimi</title>
			</Head>
			<Wrapper>
				<h1>404: This page could not be found</h1>
				<div className='back' onClick={() => router.back()}>
					<IconButton icon='/icons/arrow-left.svg' />
					<span>Go Back</span>
				</div>
			</Wrapper>
		</>
	);
};

export default NotFound;

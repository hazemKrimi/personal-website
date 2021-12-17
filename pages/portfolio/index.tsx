import React, { FC } from 'react';
import { getPortfolioProjects } from '../../utils/portfolio';
import { useRouter } from 'next/router';
import { Wrapper } from '../../styles/portfolio';
import Card from '../../components/Card';
import IconButton from '../../components/IconButton';
import Head from 'next/head';

interface Props {
	portfolioProjects: {
		title: string;
		description: string;
		image?: string;
		slug: string;
		date: string;
		tags?: string[];
	}[];
}

const Index: FC<Props> = ({ portfolioProjects }) => {
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
				<link rel='canonical' href='https://hazemkrimi.tech/portfolio' />
				<meta property='og:image' content='/logo.png' />
				<meta
					property='og:description'
					content='Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
				/>
				<meta property='og:title' content='Hazem Krimi' />
				<meta
					name='keywords'
					content='Hazem, Krimi, Developer, Software, Engineer, Web, Mobile, Frontend, Backend, Fullstack, JavaScript, React.js, React Native, Node.js, Portfolio, Blog, Tutorials, Tech News'
				/>
				<title>Portfolio | Hazem Krimi</title>
			</Head>
			<Wrapper>
				<div className='back' onClick={() => router.back()}>
					<IconButton icon='/icons/arrow-left.svg' />
					<span>Back</span>
				</div>
				<h1>Portfolio</h1>
				<div className='projects-wrapper'>
					{portfolioProjects.length !== 0 ? (
						portfolioProjects.map(({ slug, ...rest }) => (
							<Card {...rest} key={slug} href={`/portfolio/${slug}`} />
						))
					) : (
						<h4>Nothing for now</h4>
					)}
				</div>
			</Wrapper>
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const portfolioProjects = getPortfolioProjects();
	return {
		props: {
			portfolioProjects
		}
	};
};

import { FC } from 'react';
import { useRouter } from 'next/router';
import { getPortfolioProjects } from '../lib/portfolio';
import { getBlogPosts } from '../lib/blog';
import { GetStaticProps } from 'next';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Card from '../components/Card';
import Head from 'next/head';

interface Props {
	blogPosts: {
		title: string;
		author: string;
		description: string;
		slug: string;
		date: string;
		tags?: string[];
	}[];
	portfolioProjects: {
		title: string;
		description: string;
		slug: string;
		date: string;
		tags?: string[];
	}[];
}

const Wrapper = styled.div`
	padding: 1rem 0rem;
	display: grid;
	grid-template-columns: auto;
	row-gap: 1rem;

	h1 {
		display: inline;
		font-size: 1.7rem;
		margin-right: 1rem;
	}

	h4 {
		font-size: 1.3rem;
		grid-column: 1 / -1;
		align-self: center;
		justify-self: center;
	}

	.blue {
		color: #1573ca;

		@media (max-width: 768px) {
			margin-top: 0.5rem;
		}
	}

	.portfolio,
	.blog {
		margin: 1rem 0rem;
	}

	.projects-wrapper,
	.articles-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: minmax(100px, auto);
		align-items: stretch;
		justify-items: center;
		gap: 1rem;
	}
`;

const Index: FC<Props> = ({ blogPosts, portfolioProjects }) => {
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
				<title>Hazem Krimi</title>
			</Head>
			<Wrapper>
				<Hero />
				<div className='content'>
					<h1>Portfolio</h1>
					<Button className='blue' onClick={() => router.push('/portfolio')}>
						See More
					</Button>
					<div className='portfolio'>
						<div className='projects-wrapper'>
							{portfolioProjects.length !== 0 ? (
								portfolioProjects
									.slice(0, 3)
									.map(({ slug, ...rest }) => (
										<Card {...rest} key={slug} onClick={() => router.push(`/portfolio/${slug}`)} />
									))
							) : (
								<h4>Nothing for now</h4>
							)}
						</div>
					</div>
					<h1>Blog</h1>
					<Button className='blue' onClick={() => router.push('/blog')}>
						See More
					</Button>
					<div className='blog'>
						<div className='articles-wrapper'>
							{blogPosts.length !== 0 ? (
								blogPosts
									.slice(0, 3)
									.map(({ slug, ...rest }) => (
										<Card {...rest} key={slug} onClick={() => router.push(`/blog/${slug}`)} />
									))
							) : (
								<h4>Nothing for now</h4>
							)}
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
	const blogPosts = getBlogPosts();
	const portfolioProjects = getPortfolioProjects();
	return {
		props: {
			blogPosts,
			portfolioProjects
		}
	};
};

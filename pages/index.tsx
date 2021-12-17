import { FC } from 'react';
import { getPortfolioProjects } from '../utils/portfolio';
import { getBlogPosts } from '../utils/blog';
import { GetStaticProps } from 'next';
import { Wrapper } from '../styles/home';
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

const Index: FC<Props> = ({ blogPosts, portfolioProjects }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='author' content='Hazem Krimi' />
				<meta
					name='description'
					content='Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
				/>
				<link rel='canonical' href='https://hazemkrimi.tech' />
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
				<title>Hazem Krimi</title>
			</Head>
			<Wrapper>
				<Hero />
				<div className='content'>
					<h1>Portfolio</h1>
					<Button href='/portfolio' className='blue'>
						See More
					</Button>
					<div className='portfolio'>
						<div className='projects-wrapper'>
							{portfolioProjects.length !== 0 ? (
								portfolioProjects
									.slice(0, 3)
									.map(({ slug, ...rest }) => (
										<Card {...rest} key={slug} href={`/portfolio/${slug}`} />
									))
							) : (
								<h4>Nothing for now</h4>
							)}
						</div>
					</div>
					<h1>Blog</h1>
					<Button href='/blog' className='blue'>
						See More
					</Button>
					<div className='blog'>
						<div className='articles-wrapper'>
							{blogPosts.length !== 0 ? (
								blogPosts
									.slice(0, 3)
									.map(({ slug, ...rest }) => <Card {...rest} key={slug} href={`/blog/${slug}`} />)
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

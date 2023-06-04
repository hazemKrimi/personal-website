import { getProjects } from '../utils/projects';
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
	projects: {
		title: string;
		description: string;
		slug: string;
		date: string;
		tags?: string[];
	}[];
}

const Index = ({ blogPosts, projects }: Props) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='author' content='Hazem Krimi' />
				<meta
					name='description'
					content='Hazem Krimi is an experienced Full Stack developer with a focus on building user-friendly
					web and cross-platform mobile applications using cutting-edge
					technologies. Passionate about ongoing learning and staying up-to-date
					with the latest trends in software engineering.'
				/>
				<link rel='canonical' href='https://hazemkrimi.tech' />
				<meta property='og:image' content='/logo.png' />
				<meta
					property='og:description'
					content='Hazem Krimi is an experienced Full Stack developer with a focus on building user-friendly
					web and cross-platform mobile applications using cutting-edge
					technologies. Passionate about ongoing learning and staying up-to-date
					with the latest trends in software engineering.'
				/>
				<meta property='og:title' content='Hazem Krimi' />
				<meta
					name='keywords'
					content='Hazem, Krimi, Hazem Krimi, Developer, Software, Engineer, Web, Mobile, Frontend, Backend, Fullstack, JavaScript, TypeScript, React.js, React Native, Node.js, Portfolio, Blog, Tutorials, Tech News, Software Developer, Software Engineer, Full Stack TypeScript Developer, Next.js'
				/>
				<title>Hazem Krimi</title>
			</Head>
			<Wrapper>
				<Hero />
				<div className='content'>
					<h1>About</h1>
					<div className='about'>
						<p>
						Experienced Full Stack developer with a focus on building user-friendly web and cross-platform mobile applications using cutting-edge technologies. Passionate about ongoing learning and staying up-to-date with the latest trends in software engineering.
						</p>
					</div>
					{projects.length !== 0 && (
						<>
							<h1>Projects</h1>
							<Button href='/projects' className='blue'>
								See More
							</Button>
							<div className='projects'>
								<div className='projects-wrapper'>
									{projects.slice(0, 3).map(({ slug, ...rest }) => (
										<Card {...rest} key={slug} href={`/projects/${slug}`} />
									))}
								</div>
							</div>
						</>
					)}
					{blogPosts.length !== 0 && (
						<>
							<h1>Blog</h1>
							<Button href='/blog' className='blue'>
								See More
							</Button>
							<div className='blog'>
								<div className='articles-wrapper'>
									{blogPosts.slice(0, 3).map(({ slug, ...rest }) => (
										<Card {...rest} key={slug} href={`/blog/${slug}`} />
									))}
								</div>
							</div>
						</>
					)}
				</div>
			</Wrapper>
		</>
	);
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
	const blogPosts = getBlogPosts();
	const projects = getProjects();
	return {
		props: {
			blogPosts,
			projects
		}
	};
};

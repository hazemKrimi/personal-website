import { FC, useEffect } from 'react';
import { getBlogPostsSlugs, getBlogPostdata } from '../../lib/blog';
import { useRouter } from 'next/router';
import { MdxRemote } from 'next-mdx-remote/types';
import { MDXEmbedProvider } from 'mdx-embed';
import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import styled from 'styled-components';
import matter from 'gray-matter';
import AllComponents from '../../components/All';
import Head from 'next/head';
import IconButton from '../../components/IconButton';

interface Props {
	source: MdxRemote.Source;
	frontMatter: any;
}

const Wrapper = styled.div`
	min-height: 75vh;
	padding: 1rem 0rem;
	display: grid;
	grid-template-rows: auto 1fr;
	row-gap: 2rem;

	@media (max-width: 768px) {
		row-gap: 1rem;
	}

	.meta {
		text-align: center;

		.back {
			cursor: pointer;
			text-align: left;
			color: #3f9aee;
			display: flex;
			align-items: center;
		}

		h1 {
			font-size: 2rem;
			margin: 0.5rem 0rem;
		}

		h2 {
			font-size: 1.2rem;
		}

		.tags-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
		}
	}

	hr {
		height: 0.1rem;
		opacity: 0.3;
		width: 85%;
		margin: 1rem auto 0rem auto;

		@media (max-width: 768px) {
			width: 95%;
			margin: 1rem auto 0rem auto;
		}
	}

	.content {
		width: 85%;
		margin: 0rem auto;

		@media (max-width: 768px) {
			width: 95%;
		}

		h1 {
			font-size: 1.5rem;
		}

		h2 {
			font-size: 1.3rem;
		}

		h3 {
			font-size: 1.1rem;
		}

		p,
		h1,
		h2,
		h3,
		button {
			margin: 0.5rem 0rem;
		}

		p * {
			width: 100%;
			height: auto;
		}
	}
`;

const components = AllComponents;

const BlogPost: FC<Props> = ({ source, frontMatter }) => {
	const content = hydrate(source, { components });
	const router = useRouter();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='author' content='Hazem Krimi' />
				<meta
					name='description'
					content={
						frontMatter.description
							? frontMatter.description
							: 'Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
					}
				/>
				<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
				<link rel='canonical' href='https://hazemkrimi.tech' />
				<meta property='og:image' content='/logo.jpg' />
				<meta
					property='og:description'
					content={
						frontMatter.description
							? frontMatter.description
							: 'Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
					}
				/>
				<meta property='og:title' content={`${frontMatter.title} | Hazem Krimi`} />
				<meta
					name='keywords'
					content={
						frontMatter.tags
							? frontMatter.tags.join(' ')
							: 'Hazem, Krimi, Developer, Software, Engineer, Web, Mobile, Frontend, Backend, Fullstack, JavaScript, React.js, React Native, Node.js, Portfolio, Blog, Tutorials, Tech News'
					}
				/>
				<title>{frontMatter.title} | Hazem Krimi</title>
			</Head>
			<Wrapper>
				<div className='meta'>
					<div className='back' onClick={() => router.back()}>
						<IconButton icon='/icons/arrow-left.svg' />
						<span>Back</span>
					</div>
					<h1>{frontMatter.title}</h1>
					<p>
						Written by <b>{frontMatter.author}</b> on <b>{frontMatter.date}</b>
					</p>
					{frontMatter.tags && (
						<div className='tags-wrapper'>
							{frontMatter.tags.map((tag: string, index: number) => (
								<span key={index}>#{tag}&nbsp;</span>
							))}
						</div>
					)}
					<hr />
				</div>
				<MDXEmbedProvider>
					<div className='content'>{content}</div>
				</MDXEmbedProvider>
			</Wrapper>
		</>
	);
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getBlogPostsSlugs();
	return {
		paths,
		fallback: false
	};
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const blogPostContent = await getBlogPostdata(params.slug);
	const { data, content } = matter(blogPostContent);
	const mdxSource = await renderToString(content, {
		components,
		scope: data
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data
		}
	};
};

import { FC, useEffect } from 'react';
import { getBlogPostsSlugs, getBlogPostdata } from '../../utils/blog';
import { useRouter } from 'next/router';
import { MdxRemote } from 'next-mdx-remote/types';
import { MDXProvider } from '@mdx-js/react';
import { MDXEmbedProvider } from 'mdx-embed';
import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import styled from 'styled-components';
import matter from 'gray-matter';
import AllComponents from '../../components/All';
import Head from 'next/head';
import IconButton from '../../components/IconButton';
import CodeBlock from '../../components/CodeBlock';
import readingTime from 'reading-time';

interface Props {
	source: MdxRemote.Source;
	frontMatter: any;
	text: string;
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
		.back {
			cursor: pointer;
			text-align: left;
			color: #3f9aee;
			display: inline-flex;
			align-items: center;
		}

		.image {
			height: 0;
			width: 100%;
			overflow: hidden;
			padding-top: calc(591.44 / 1127.34 * 100%);
			position: relative;
			margin-bottom: 1rem;

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}

		h1,
		p,
		.tags-wrapper {
			text-align: left;
		}

		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 1.2rem;
		}

		.tags-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			flex-wrap: wrap;
		}
	}

	hr {
		height: 0.1rem;
		opacity: 0.3;
		margin: 1rem auto 0rem auto;

		@media (max-width: 768px) {
			margin: 1rem auto 0rem auto;
		}
	}

	.content {
		h1 {
			font-size: 1.5rem;
		}

		h2 {
			font-size: 1.3rem;
		}

		h3 {
			font-size: 1.1rem;
		}

		& > * {
			margin: 0.5rem 0rem;
		}

		p * {
			width: 100%;
			height: auto;
		}
	}
`;

const components = AllComponents;

const BlogPost: FC<Props> = ({ source, frontMatter, text }) => {
	const content = hydrate(source, { components });
	const router = useRouter();
	const stats = readingTime(text);

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
					{frontMatter.image ? (
						<div className='image'>
							<img src={frontMatter.image} alt='portfolio project image' />
						</div>
					) : null}
					<div className='back' onClick={() => router.back()}>
						<IconButton icon='/icons/arrow-left.svg' />
						<span>Back</span>
					</div>
					<h1>{frontMatter.title}</h1>
					<p>{frontMatter.description}</p>
					<p>
						By <b>{frontMatter.author}</b> on <b>{frontMatter.date}</b> ({stats.text})
					</p>
					{frontMatter.tags ? (
						<div className='tags-wrapper'>
							{frontMatter.tags.map((tag: string, index: number) => (
								<span key={index}>#{tag}&nbsp;</span>
							))}
						</div>
					) : null}
					<hr />
				</div>
				<MDXProvider components={{ code: CodeBlock }}>
					<MDXEmbedProvider>
						<div className='content'>{content}</div>
					</MDXEmbedProvider>
				</MDXProvider>
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
			frontMatter: data,
			text: content
		}
	};
};

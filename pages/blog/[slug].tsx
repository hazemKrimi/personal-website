import { FC } from 'react';
import { getBlogPostsSlugs, getBlogPostdata } from '../../lib/blog';
import { useRouter } from 'next/router';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import styled from 'styled-components';
import matter from 'gray-matter';
import AllComponents from '../../components/All';
import Head from 'next/head';
import IconButton from '../../components/IconButton';

interface Props {
	source: any;
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
		h3 {
			margin: 0.5rem 0rem;
		}
	}
`;

const components = AllComponents;

const BlogPost: FC<Props> = ({ source, frontMatter }) => {
	const content = hydrate(source, { components });
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{frontMatter.title}</title>
			</Head>
			<Wrapper>
				<div className='meta'>
					<div className='back' onClick={() => router.back()}>
						<IconButton icon='/arrow-left.svg' />
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
				<div className='content'>{content}</div>
			</Wrapper>
		</>
	);
};

export default BlogPost;

export async function getStaticPaths() {
	const paths = getBlogPostsSlugs();
	return {
		paths,
		fallback: false
	};
}
export async function getStaticProps({ params }: any) {
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
}

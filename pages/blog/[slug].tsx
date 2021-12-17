import { FC, useEffect } from 'react';
import { getBlogPostsSlugs, getBlogPostdata } from '../../utils/blog';
import { useRouter } from 'next/router';
import { MdxRemote } from 'next-mdx-remote/types';
import { MDXProvider } from '@mdx-js/react';
import { MDXEmbedProvider } from 'mdx-embed';
import { GetStaticPaths, GetStaticProps } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Wrapper } from '../../styles/blog/slug';
import matter from 'gray-matter';
import components from '../../components';
import Head from 'next/head';
import IconButton from '../../components/IconButton';
import CodeBlock from '../../components/CodeBlock';
import readingTime from 'reading-time';
import Image from 'next/image';

interface Props {
	source: MdxRemote.Source;
	frontMatter: any;
	text: string;
}

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
				<link rel='canonical' href='https://hazemkrimi.tech' />
				<meta property='og:image' content='/logo.png' />
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
					{frontMatter.image ? (
						<div className='image'>
							<Image src={frontMatter.image} width='100%' height='100%' layout='responsive' />
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

import { FC, useEffect } from 'react';
import { getPortfolioPorjectsSlugs, getPortfolioProjectdata } from '../../utils/portfolio';
import { useRouter } from 'next/router';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import { Wrapper } from '../../styles/portfolio/slug';
import Head from 'next/head';
import IconButton from '../../components/IconButton';
import CodeBlock from '../../components/CodeBlock';
import MDXButton from '../../components/MDXButton';
import Image from 'next/image';

interface Props {
	source: MDXRemoteSerializeResult;
	frontMatter: any;
}

const PortfolioProject: FC<Props> = ({ source, frontMatter }) => {
	const router = useRouter();
	const htmlOverrides = { code: CodeBlock };
	const mdxComponents = { Button: MDXButton };

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
						frontMatter?.description
							? frontMatter.description
							: 'Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
					}
				/>
				<link rel='canonical' href='https://hazemkrimi.tech' />
				<meta property='og:image' content='/logo.png' />
				<meta
					property='og:description'
					content={
						frontMatter?.description
							? frontMatter.description
							: 'Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast'
					}
				/>
				<meta property='og:title' content={`${frontMatter?.title} | Hazem Krimi`} />
				<meta
					name='keywords'
					content={
						frontMatter?.tags
							? frontMatter.tags.join(' ')
							: 'Hazem, Krimi, Developer, Software, Engineer, Web, Mobile, Frontend, Backend, Fullstack, JavaScript, React.js, React Native, Node.js, Portfolio, Blog, Tutorials, Tech News'
					}
				/>
				<title>{`${frontMatter?.title} | Hazem Krimi`}</title>
			</Head>
			<Wrapper>
				<div className='meta'>
					<div className='back' onClick={() => router.back()}>
						<IconButton alt='Back' icon='/icons/arrow-left.svg' />
						<span>Back</span>
					</div>
					<h1>{frontMatter?.title}</h1>
					<p>{frontMatter?.description}</p>
					{frontMatter?.tags ? (
						<div className='tags-wrapper'>
							{frontMatter.tags.map((tag: string, index: number) => (
								<span key={index}>#{tag}&nbsp;</span>
							))}
						</div>
					) : null}
					{frontMatter?.image && !frontMatter?.hideImage ? (
						<div className='image'>
							<Image alt={frontMatter?.title} src={frontMatter?.image} fill />
						</div>
					) : null}
					<hr />
				</div>
				<MDXProvider components={{ ...htmlOverrides, ...mdxComponents }}>
					<div className='content'>
						<MDXRemote {...source} />
						<h1>Showcase</h1>
						<div className='showcase-buttons'>
							<MDXButton variant='action' link={frontMatter?.demo} target='_blank'>
								Demo
							</MDXButton>
							<MDXButton variant='outline' link={frontMatter?.code} target='_blank'>
								Source Code
							</MDXButton>
						</div>
					</div>
				</MDXProvider>
			</Wrapper>
		</>
	);
};

export default PortfolioProject;

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getPortfolioPorjectsSlugs();
	return {
		paths,
		fallback: false
	};
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const portfolioProjectContent = await getPortfolioProjectdata(params.slug);

	if (!portfolioProjectContent)
		return {
			props: {
				source: undefined,
				frontMatter: undefined
			}
		};

	const { data, content } = matter(portfolioProjectContent);
	const mdxSource = await serialize(content, {
		scope: data
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data
		}
	};
};

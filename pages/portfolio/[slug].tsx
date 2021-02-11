import { FC, useEffect } from "react";
import {
	getPortfolioPorjectsSlugs,
	getPortfolioProjectdata,
} from "../../lib/portfolio";
import { useRouter } from "next/router";
import { MdxRemote } from "next-mdx-remote/types";
import { MDXProvider } from "@mdx-js/react";
import { MDXEmbedProvider } from "mdx-embed";
import { GetStaticPaths, GetStaticProps } from "next";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import styled from "styled-components";
import matter from "gray-matter";
import AllComponents from "../../components/All";
import Head from "next/head";
import IconButton from "../../components/IconButton";
import CodeBlock from "../../components/CodeBlock";

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
		.back {
			cursor: pointer;
			text-align: left;
			color: #3f9aee;
			display: flex;
			align-items: center;
		}

		h1,
		p {
			text-align: left;
			width: 85%;
			margin: 0.5rem auto;
		}

		h1 {
			font-size: 2rem;
		}

		h2 {
			font-size: 1.2rem;
		}
	}

	hr {
		height: 0.1rem;
		opacity: 0.3;
		width: 85%;
		margin: 1rem auto 0rem auto;

		@media (max-width: 768px) {
			width: 95%;
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

const PortfolioProject: FC<Props> = ({ source, frontMatter }) => {
	const content = hydrate(source, { components });
	const router = useRouter();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="author" content="Hazem Krimi" />
				<meta
					name="description"
					content={
						frontMatter.description
							? frontMatter.description
							: "Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast"
					}
				/>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
				<link rel="canonical" href="https://hazemkrimi.tech" />
				<meta property="og:image" content="/logo.jpg" />
				<meta
					property="og:description"
					content={
						frontMatter.description
							? frontMatter.description
							: "Hazem Krimi is a Full Stack JavaScript Developer and a Software Engineering Enthusiast"
					}
				/>
				<meta
					property="og:title"
					content={`${frontMatter.title} | Hazem Krimi`}
				/>
				<meta
					name="keywords"
					content="Hazem, Krimi, Developer, Software, Engineer, Web, Mobile, Frontend, Backend, Fullstack, JavaScript, React.js, React Native, Node.js, Portfolio, Blog, Tutorials, Tech News"
				/>
				<title>{frontMatter.title} | Hazem Krimi</title>
			</Head>
			<Wrapper>
				<div className="meta">
					<div className="back" onClick={() => router.back()}>
						<IconButton icon="/icons/arrow-left.svg" />
						<span>Back</span>
					</div>
					<h1>{frontMatter.title}</h1>
					<p>{frontMatter.description}</p>
					{frontMatter.tags && (
						<div className="tags-wrapper">
							{frontMatter.tags.map((tag: string, index: number) => (
								<span key={index}>#{tag}&nbsp;</span>
							))}
						</div>
					)}
					<hr />
				</div>
				<MDXProvider components={{ code: CodeBlock }}>
					<MDXEmbedProvider>
						<div className="content">{content}</div>
					</MDXEmbedProvider>
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
		fallback: false,
	};
};
export const getStaticProps: GetStaticProps = async ({ params }: any) => {
	const blogPostContent = await getPortfolioProjectdata(params.slug);
	const { data, content } = matter(blogPostContent);
	const mdxSource = await renderToString(content, {
		components,
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontMatter: data,
		},
	};
};

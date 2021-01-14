import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { getBlogPosts } from '../../lib/blog';
import styled from 'styled-components';
import Card from '../../components/Card';
import IconButton from '../../components/IconButton';

interface Props {
	blogPosts: {
		title: string;
		author: string;
		description: string;
		slug: string;
		date: string;
		tags?: string[];
	}[];
}

const Wrapper = styled.div`
	min-height: 75vh;
	padding: 1rem 0rem;

	.back {
		cursor: pointer;
		text-align: left;
		color: #3f9aee;
		display: flex;
		align-items: center;
	}

	h1 {
		font-size: 1.7rem;
		margin-bottom: 1rem;
	}

	h4 {
		font-size: 1.3rem;
		grid-column: 1 / -1;
		align-self: center;
		justify-self: center;
	}

	.articles-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: minmax(100px, auto);
		align-items: stretch;
		justify-items: center;
		gap: 1rem;
	}
`;

const Index: FC<Props> = ({ blogPosts }) => {
	const router = useRouter();

	return (
		<Wrapper>
			<div className='back' onClick={() => router.back()}>
				<IconButton icon='/arrow-left.svg' />
				<span>Back</span>
			</div>
			<h1>Blog</h1>
			<div className='articles-wrapper'>
				{blogPosts.length !== 0 ? (
					blogPosts.map(({ slug, ...rest }) => (
						<Card {...rest} key={slug} onClick={() => router.push(`/blog/${slug}`)} />
					))
				) : (
					<h4>Nothing for now</h4>
				)}
			</div>
		</Wrapper>
	);
};

export default Index;

export async function getStaticProps() {
	const blogPosts = getBlogPosts();
	return {
		props: {
			blogPosts
		}
	};
}

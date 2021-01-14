import React, { FC } from 'react';
import { getPortfolioProjects } from '../../lib/portfolio';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Card from '../../components/Card';
import IconButton from '../../components/IconButton';

interface Props {
	portfolioProjects: {
		title: string;
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

	.projects-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: minmax(100px, auto);
		align-items: stretch;
		justify-items: center;
		gap: 1rem;
	}
`;

const Index: FC<Props> = ({ portfolioProjects }) => {
	const router = useRouter();

	return (
		<Wrapper>
			<div className='back' onClick={() => router.back()}>
				<IconButton icon='/arrow-left.svg' />
				<span>Back</span>
			</div>
			<h1>Portfolio</h1>
			<div className='projects-wrapper'>
				{portfolioProjects.length !== 0 ? (
					portfolioProjects.map(({ slug, ...rest }) => (
						<Card {...rest} key={slug} onClick={() => router.push(`/portfolio/${slug}`)} />
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
	const portfolioProjects = getPortfolioProjects();
	return {
		props: {
			portfolioProjects
		}
	};
}

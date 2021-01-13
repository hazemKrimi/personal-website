import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Button from '../components/Button';
import Card from '../components/Card';

const Wrapper = styled.div`
	padding: 1rem 0rem;
	display: grid;
	grid-template-columns: auto;
	row-gap: 1rem;

	h1 {
		display: inline;
		font-size: 1.7rem;
		margin-right: 1rem;
	}

	h4 {
		font-size: 1.3rem;
		grid-column: 1 / -1;
		align-self: center;
		justify-self: center;
	}

	.blue {
		color: #1573ca;

		@media (max-width: 768px) {
			margin-top: 0.5rem;
		}
	}

	.portfolio,
	.blog {
		margin: 1rem 0rem;

		@media (max-width: 768px) {
			margin: 0.5rem 0rem;
		}
	}

	.projects-wrapper,
	.articles-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-auto-rows: minmax(100px, auto);
		align-items: stretch;
		justify-items: center;
		gap: 1rem;
	}
`;

const Index: FC = () => {
	const [projects] = useState<{ title: string; description: string }[]>([
		{ title: 'Project 1', description: 'Description 1' }
	]);
	const [articles] = useState<{ title: string; description: string; tags: string[] }[]>([
		{ title: 'Article 1', description: 'Description 1', tags: ['Tag 1', 'Tag 2'] },
		{ title: 'Article 1', description: 'Description 1', tags: ['Tag 1', 'Tag 2'] },
		{ title: 'Article 1', description: 'Description 1', tags: ['Tag 1', 'Tag 2'] },
		{
			title: 'Article 1',
			description: 'Description 1',
			tags: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6']
		}
	]);

	return (
		<Wrapper>
			<Hero />
			<div className='content'>
				<h1>Portfolio</h1>
				<Button className='blue'>See More</Button>
				<div className='portfolio'>
					<div className='projects-wrapper'>
						{projects.length !== 0 ? (
							projects.map((project, index) => <Card {...project} key={index} />)
						) : (
							<h4>Nothing for now</h4>
						)}
					</div>
				</div>
				<h1>Blog</h1>
				<Button className='blue'>See More</Button>
				<div className='blog'>
					<div className='articles-wrapper'>
						{articles.length !== 0 ? (
							articles.map((article, index) => <Card {...article} key={index} />)
						) : (
							<h4>Nothing for now</h4>
						)}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Index;

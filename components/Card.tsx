import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';
import Image from 'next/image';

interface Props {
	title: string;
	description: string;
	image?: string;
	tags?: string[];
	onClick?: () => void;
}

const StyledCard = styled.div<{ dark: boolean; image: boolean }>`
	cursor: pointer;
	width: 100%;
	display: grid;
	grid-template-columns: auto 150px;
	align-items: stretch;
	transition: color 0ms ease-in-out;

	&:hover {
		& > div {
			background: ${({ theme }) => theme.colors.blue};
			color: ${({ theme }) => theme.colors.dark.text};
		}

		img {
			filter: ${({ image }) => (image ? 'grayscale(80%)' : 'none')};
		}
	}

	& > div {
		padding: 1rem 0rem;
		background: var(--secondary-background);
		display: grid;
		row-gap: 0.5rem;

		@media (max-width: 768px) {
			padding: 0.75rem 0rem;
		}
	}

	h3,
	p,
	.tags-wrapper {
		padding: 0rem 1rem;

		@media (max-width: 768px) {
			padding: 0rem 0.5rem;
		}
	}

	h3 {
		font-size: 1.3rem;
	}

	.tags-wrapper {
		display: flex;
		flex-direction: row;
		align-content: center;
		flex-wrap: wrap;
	}

	span {
		font-size: 0.7rem;
	}
`;

const Card: FC<Props> = ({ title, description, image, tags, onClick }) => {
	const { dark } = useContext(DarkModeContext);

	return (
		<StyledCard dark={dark} onClick={onClick} image={!!image}>
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
				{tags && (
					<div className='tags-wrapper'>
						{tags.map((tag, index) => (
							<span key={index}>#{tag}&nbsp;</span>
						))}
					</div>
				)}
			</div>
			{image ? (
				<Image src={image} width='100%' height='100%' layout='responsive' />
			) : (
				<Image src='/no-image.png' width='100%' height='100%' layout='responsive' />
			)}
		</StyledCard>
	);
};

export default Card;

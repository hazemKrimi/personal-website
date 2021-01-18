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

const StyledCard = styled.div<{ dark: boolean }>`
	cursor: pointer;
	padding: 1rem 0rem;
	width: 100%;
	display: grid;
	align-items: center;
	background: ${({ dark, theme }) => (dark ? '#2f2f2f' : theme.colors.dark.text)};
	box-shadow: ${({ dark }) => !dark && `6px 2px 15px 0px rgba(0, 0, 0, 0.15)`};
	transition: box-shadow 250ms ease-in-out, color 0ms ease-in-out;

	@media (max-width: 768px) {
		padding: 0.5rem 0rem;
	}

	&:hover {
		background: #3889d4;
		color: ${({ theme }) => theme.colors.dark.text};
		box-shadow: ${({ dark }) => !dark && '5px 2px 26px 6px rgba(21, 115, 202, 0.30)'};
	}

	div {
		display: grid;
		row-gap: 0.5rem;
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
		<StyledCard dark={dark} onClick={onClick}>
			<div>
				<h3>{title}</h3>
				{image && (
					<Image src={image} className='image' width='auto' height='auto' layout='responsive' />
				)}
				<p>{description}</p>
				{tags && (
					<div className='tags-wrapper'>
						{tags && tags.map((tag, index) => <span key={index}>#{tag}&nbsp;</span>)}
					</div>
				)}
			</div>
		</StyledCard>
	);
};

export default Card;

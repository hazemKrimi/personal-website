import { FC } from 'react';
import { StyledCard } from './styles';
import Image from 'next/image';

interface Props {
	title: string;
	description: string;
	image?: string;
	tags?: string[];
	href: string;
	target?: HTMLAnchorElement['target'];
	onClick?: () => void;
}

const Card: FC<Props> = ({ title, description, image, tags, href, target, onClick }) => {
	return (
		<StyledCard href={href} onClick={onClick} image={image ? Boolean(image) : undefined} target={target}>
			<div className='card-content'>
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
			{image && (
				<div className='card-image'>
					<Image alt={title} src={image} fill />
				</div>
			)}
		</StyledCard>
	);
};

export default Card;

import { FC } from 'react';
import { StyledCard } from './styles';
import Image from 'next/image';
import Link from 'next/link';

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
		<Link href={href} passHref>
			<StyledCard as='a' target={target} onClick={onClick} image={!!image}>
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
						<Image src={image} layout='fill' objectFit='cover' />
					</div>
				)}
			</StyledCard>
		</Link>
	);
};

export default Card;

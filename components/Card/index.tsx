import Image from 'next/image';
import { StyledCard } from './styles';
import { Props } from './types';

const Card = ({
  title,
  description,
  image,
  tags,
  href,
  target,
  onClick,
}: Props) => {
  return (
    <StyledCard
      href={href}
      onClick={onClick}
      image={image ? Boolean(image) : undefined}
      target={target}
    >
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

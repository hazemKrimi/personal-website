import Image from 'next/image';
import { Props } from './types';
import { StyledButton, StyledLink } from './styles';

const IconButton = ({
  alt,
  icon,
  href,
  target,
  onClick,
  className,
  width = 24,
  height = 24,
}: Props) =>
  href ? (
    <StyledLink
      href={href}
      target={target}
      onClick={onClick}
      className={className}
    >
      <Image alt={alt} src={icon} width={width} height={height} />
    </StyledLink>
  ) : (
    <StyledButton onClick={onClick} className={className}>
      <Image alt={alt} src={icon} width={width} height={height} />
    </StyledButton>
  );

export default IconButton;

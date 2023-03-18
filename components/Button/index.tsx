import { Props } from './types';
import { StyledButton } from './styles';

const Button = ({
	variant = 'text',
	href,
	target,
	onClick,
	children,
	className
}: Props) => (
	<StyledButton href={href} target={target} className={className} onClick={onClick} variant={variant}>
		{children}
	</StyledButton>
);

export default Button;

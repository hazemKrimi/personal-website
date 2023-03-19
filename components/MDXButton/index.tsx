import { useContext } from 'react';
import { ThemeContext } from '../../styles/theme';
import { Props } from './types';
import { StyledLink, StyledButton } from './styles';

const MDXButton = ({
	variant = 'text',
	type = 'button',
	link,
	target,
	children,
	disabled,
	className
}: Props) => {
	const { mode } = useContext(ThemeContext);

	return link ? (
		<StyledLink
			href={link}
			target={target}
			variant={variant}
			type={type}
			mode={mode}
			disabled={disabled}
			className={className}
		>
			{children}
		</StyledLink>
	) : (
		<StyledButton variant={variant} type={type} mode={mode} disabled={disabled} className={className}>
			{children}
		</StyledButton>
	);
};

export default MDXButton;

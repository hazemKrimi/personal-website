import { useContext } from 'react';
import { ThemeContext } from '../../styles/theme';
import { Props } from './types';
import { Btn } from './styles';

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
		<Btn
			href={link}
			target={target}
			variant={variant}
			type={type}
			mode={mode}
			disabled={disabled}
			className={className}
		>
			{children}
		</Btn>
	) : (
		<Btn href="#" variant={variant} type={type} mode={mode} disabled={disabled} className={className}>
			{children}
		</Btn>
	);
};

export default MDXButton;

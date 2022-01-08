import { FC, useContext } from 'react';
import { ThemeContext } from '../../styles/theme';
import { Props } from './types';
import { Btn } from './styles';
import Link from 'next/link';

const Button: FC<Props & { className?: string }> = ({
	variant = 'text',
	href,
	target,
	onClick,
	children,
	className
}) => {
	return (
		<Link href={href} passHref>
			<Btn as='a' target={target} variant={variant} onClick={onClick} className={className}>
				{children}
			</Btn>
		</Link>
	);
};

export default Button;

import { FC, useContext } from 'react';
import { DarkModeContext } from '../../components/DarkMode';
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
	const { dark } = useContext(DarkModeContext);

	return (
		<Link href={href} passHref>
			<Btn
				as='a'
				target={target}
				variant={variant}
				dark={dark}
				onClick={onClick}
				className={className}
			>
				{children}
			</Btn>
		</Link>
	);
};

export default Button;

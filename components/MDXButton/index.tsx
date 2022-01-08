import { FC, useContext } from 'react';
import { ThemeContext } from '../../styles/theme';
import { Props } from './types';
import { Btn } from './styles';
import Link from 'next/link';

const MDXButton: FC<Props & { className?: string }> = ({
	variant = 'text',
	type = 'button',
	link,
	target,
	children,
	disabled,
	className
}) => {
	const { mode } = useContext(ThemeContext);

	return link ? (
		<Link href={link} passHref>
			<Btn
				as='a'
				target={target}
				variant={variant}
				type={type}
				mode={mode}
				disabled={disabled}
				className={className}
			>
				{children}
			</Btn>
		</Link>
	) : (
		<Btn variant={variant} type={type} mode={mode} disabled={disabled} className={className}>
			{children}
		</Btn>
	);
};

export default MDXButton;

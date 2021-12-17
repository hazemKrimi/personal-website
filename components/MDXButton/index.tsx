import { FC, useContext } from 'react';
import { DarkModeContext } from '../../components/DarkMode';
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
	const { dark } = useContext(DarkModeContext);

	return link ? (
		<Link href={link} passHref>
			<Btn
				as='a'
				target={target}
				variant={variant}
				type={type}
				dark={dark}
				disabled={disabled}
				className={className}
			>
				{children}
			</Btn>
		</Link>
	) : (
		<Btn variant={variant} type={type} dark={dark} disabled={disabled} className={className}>
			{children}
		</Btn>
	);
};

export default MDXButton;

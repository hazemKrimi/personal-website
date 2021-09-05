import React, { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';

interface Props {
	placeholder?: string;
	type: 'text' | 'email';
	variant: 'small' | 'big';
	name: string;
	value: string;
	required?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SmallField = styled.input<{ dark: boolean }>`
	border: none;
	padding: 1rem;
	background: var(--secondary-background);
	color: var(--text);
`;

const BigField = styled.textarea<{ dark: boolean }>`
	resize: none;
	border: none;
	padding: 1rem;
	background: var(--secondary-background);
	color: var(--text);
`;

const Input: FC<Props & { className?: string }> = ({
	type = 'text',
	variant = 'small',
	name,
	value,
	required,
	placeholder,
	className,
	onChange
}) => {
	const { dark } = useContext(DarkModeContext);

	return variant === 'small' ? (
		<SmallField
			dark={dark}
			type={type}
			name={name}
			value={value}
			required={required}
			placeholder={placeholder}
			className={className}
			onChange={onChange}
		/>
	) : (
		<BigField
			dark={dark}
			name={name}
			value={value}
			required={required}
			placeholder={placeholder}
			className={className}
			onChange={onChange}
			rows={3}
		/>
	);
};

export default Input;

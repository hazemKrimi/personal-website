import React, { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';

interface Props {
	placeholder?: string;
	type: 'text' | 'email';
	variant: 'small' | 'big';
	name: string;
	value: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SmallField = styled.input<{ dark: boolean }>`
	border: none;
	padding: 1rem;
	background: ${({ dark, theme }) => (dark ? '#2f2f2f' : theme.colors.dark.text)};
	box-shadow: ${({ dark }) => !dark && `1px 1px 10px 0px rgba(0, 0, 0, 0.15)`};
	color: ${({ dark, theme }) => (dark ? theme.colors.dark.text : theme.colors.light.text)};
`;

const BigField = styled.textarea<{ dark: boolean }>`
	resize: none;
	border: none;
	padding: 1rem;
	background: ${({ dark, theme }) => (dark ? '#2f2f2f' : theme.colors.dark.text)};
	box-shadow: ${({ dark }) => !dark && `1px 1px 10px 0px rgba(0, 0, 0, 0.15)`};
	color: ${({ dark, theme }) => (dark ? theme.colors.dark.text : theme.colors.light.text)};
`;

const Input: FC<Props & { className?: string }> = ({
	type = 'text',
	variant = 'small',
	name,
	value,
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
			placeholder={placeholder}
			className={className}
			onChange={onChange}
		/>
	) : (
		<BigField
			dark={dark}
			name={name}
			value={value}
			placeholder={placeholder}
			className={className}
			onChange={onChange}
			rows={3}
		/>
	);
};

export default Input;

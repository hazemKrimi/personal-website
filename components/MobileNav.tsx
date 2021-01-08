import { FC, useContext } from 'react';
import { DarkModeContext } from './DarkMode';
import styled from 'styled-components';
import IconButton from './IconButton';
import Button from './Button';

interface Props {
	open: boolean;
	close: () => void;
}

interface StyledProps {
	dark: boolean;
	open: boolean;
}

const Bar = styled.nav<StyledProps>`
	position: fixed;
	z-index: 2;
	top: 0;
	right: 0;
	transform-origin: right;
	transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
	width: 80%;
	height: 100vh;
	background: ${({ theme, dark }) => (dark ? theme.colors.dark.text : theme.colors.light.text)};
	transition: transform 250ms ease-in-out;
	display: grid;
	grid-template-rows: auto;
	row-gap: 0.3rem;
	padding: 1rem 1rem 5rem 1rem;

	.close {
		justify-self: flex-end;
		align-self: flex-start;
		margin-top: 0.5rem;
	}

	.mobile {
		color: ${({ theme, dark }) =>
			dark ? theme.colors.light.text : theme.colors.dark.text} !important;
		margin: 0rem 1rem;
	}
`;

const MobileNav: FC<Props> = ({ open, close }) => {
	const { dark, toggle } = useContext(DarkModeContext);

	return (
		<Bar dark={dark} open={open}>
			<div className='close'>
				<IconButton icon={dark ? '/dark-close.svg' : '/light-close.svg'} onClick={close} />
			</div>
			<Button className='mobile'>About</Button>
			<Button className='mobile'>Blog</Button>
			<Button className='mobile'>Portfolio</Button>
			<Button className='mobile' onClick={() => toggle()}>
				{dark ? 'Light Mode' : 'Dark Mode'}
			</Button>
		</Bar>
	);
};

export default MobileNav;

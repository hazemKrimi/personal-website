import { FC, useContext, useRef, useEffect } from 'react';
import { DarkModeContext } from './DarkMode';
import { useRouter } from 'next/router';
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
	grid-template-rows: 30% repeat(4, 50px);
	padding: 1rem 1rem 5rem 1rem;

	@media (orientation: landscape) {
		grid-template-rows: auto;
	}

	.close {
		justify-self: flex-end;
		align-self: flex-start;
		margin-top: 0.5rem;
	}

	.mobile-button-wrapper {
		display: flex;
		margin: 0rem 1rem;

		button {
			color: ${({ theme, dark }) =>
				dark ? theme.colors.light.text : theme.colors.dark.text} !important;
		}
	}
`;

const MobileNav: FC<Props> = ({ open, close }) => {
	const { dark, toggle } = useContext(DarkModeContext);
	const ref = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		document.addEventListener('mousedown', (event: MouseEvent) => {
			if (ref.current && ref.current.contains(event.target as Node)) {
				document.addEventListener('mouseup', event => {
					if (ref.current && !ref.current.contains(event.target as Node)) return;
				});
			} else {
				document.addEventListener('mouseup', event => {
					if (ref.current && !ref.current.contains(event.target as Node)) close();
				});
			}
		});

		return () => {
			document.removeEventListener('mousedown', () => {});
			document.removeEventListener('mouseup', () => {});
		};
	});

	return (
		<Bar dark={dark} open={open} ref={ref}>
			<div className='close'>
				<IconButton icon={dark ? '/dark-close.svg' : '/light-close.svg'} onClick={close} />
			</div>
			<div className='mobile-button-wrapper'>
				<Button onClick={() => toggle()}>{dark ? 'Light Mode' : 'Dark Mode'}</Button>
			</div>
			<div className='mobile-button-wrapper'>
				<Button
					onClick={() => {
						close();
						router.push('/about');
					}}
				>
					About
				</Button>
			</div>
			<div className='mobile-button-wrapper'>
				<Button
					onClick={() => {
						close();
						router.push('/portfolio');
					}}
				>
					Portfolio
				</Button>
			</div>
			<div className='mobile-button-wrapper'>
				<Button
					onClick={() => {
						close();
						router.push('/blog');
					}}
				>
					Blog
				</Button>
			</div>
		</Bar>
	);
};

export default MobileNav;

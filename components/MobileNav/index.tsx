import { FC, useContext, useRef, useEffect } from 'react';
import { DarkModeContext } from '../DarkMode';
import { Props } from './types';
import { Bar } from './styles';
import IconButton from '../IconButton';
import Button from '../Button';

const MobileNav: FC<Props> = ({ open, close }) => {
	const { dark, toggle } = useContext(DarkModeContext);
	const ref = useRef<HTMLDivElement>(null);

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
				<IconButton
					icon={dark ? '/icons/dark-close.svg' : '/icons/light-close.svg'}
					onClick={close}
				/>
			</div>
			<div className='mobile-button-wrapper'>
				<Button href='#' onClick={() => toggle()}>
					{dark ? 'Light Mode' : 'Dark Mode'}
				</Button>
			</div>
			<div className='mobile-button-wrapper'>
				<Button href='/about'>About</Button>
			</div>
			<div className='mobile-button-wrapper'>
				<Button href='/portfolio'>Portfolio</Button>
			</div>
			<div className='mobile-button-wrapper'>
				<Button href='/blog'>Blog</Button>
			</div>
		</Bar>
	);
};

export default MobileNav;

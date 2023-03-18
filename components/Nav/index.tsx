import { FC, useContext, useState } from 'react';
import { ThemeContext } from '../../styles/theme';
import { Bar } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
import IconButton from '../IconButton';
import MobileNav from '../MobileNav';

const Nav: FC = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
	const { mode, toggle } = useContext(ThemeContext);

	return (
		<Bar>
			<Link className='logo' href='/'>
				<Image
					className='logo-image'
					src={mode === 'dark' ? '/light-logo.svg' : '/dark-logo.svg'}
					alt='Logo Image'
					width={48}
					height={48}
				/>
				<h1>Hazem Krimi</h1>
			</Link>
			<div className='buttons'>
				<IconButton
					alt='Theme toggler'
					icon={mode === 'dark' ? '/icons/sun.svg' : '/icons/moon.svg'}
					onClick={toggle}
				/>
				<Button href='/portfolio'>Portfolio</Button>
				<Button href='/blog'>Blog</Button>
				<Button href='/contact'>Contact</Button>
				<Button href='/resume.pdf' target='_blank' variant='outline'>
					Resume
				</Button>
			</div>
			<div className='mobile-buttons'>
				<Button href='/resume.pdf' target='_blank' variant='outline'>
					Resume
				</Button>
				<IconButton
					alt='Theme toggler'
					icon={mode === 'dark' ? '/icons/light-menu.svg' : '/icons/dark-menu.svg'}
					onClick={() => setMobileNavOpen(true)}
				/>
			</div>
			<MobileNav open={mobileNavOpen} close={() => setMobileNavOpen(false)} />
		</Bar>
	);
};

export default Nav;

import { FC, useContext, useState } from 'react';
import { DarkModeContext } from '../DarkMode';
import { Bar } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
import IconButton from '../IconButton';
import MobileNav from '../MobileNav';

const Nav: FC = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
	const { dark, toggle } = useContext(DarkModeContext);

	return (
		<Bar>
			<Link href='/' passHref>
				<a className='logo'>
					<Image
						className='logo-image'
						src={dark ? '/light-logo.svg' : '/dark-logo.svg'}
						alt='Logo Image'
						width={48}
						height={48}
					/>
					<h1>Hazem Krimi</h1>
				</a>
			</Link>
			<div className='buttons'>
				<IconButton icon={dark ? '/icons/sun.svg' : '/icons/moon.svg'} onClick={toggle} />
				<Button href='/about'>About</Button>
				<Button href='/portfolio'>Portfolio</Button>
				<Button href='/blog'>Blog</Button>
				<Button href='/resume.pdf' target='_blank' variant='outline'>
					Resume
				</Button>
			</div>
			<div className='mobile-buttons'>
				<Button href='/resume.pdf' target='_blank' variant='outline'>
					Resume
				</Button>
				<IconButton
					icon={dark ? '/icons/light-menu.svg' : '/icons/dark-menu.svg'}
					onClick={() => setMobileNavOpen(true)}
				/>
			</div>
			<MobileNav open={mobileNavOpen} close={() => setMobileNavOpen(false)} />
		</Bar>
	);
};

export default Nav;

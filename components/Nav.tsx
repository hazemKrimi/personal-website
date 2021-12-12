import { FC, useContext, useState } from 'react';
import { DarkModeContext } from './DarkMode';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import IconButton from './IconButton';
import MobileNav from './MobileNav';

const Bar = styled.nav`
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	padding: 1rem 0rem;

	* {
		user-select: none;
	}

	h1 {
		font-size: 1.7rem;

		@media (max-width: 768px) {
			font-size: 1rem;
		}
	}

	div,
	a.logo {
		display: grid;
		align-items: center;
		column-gap: 1rem;

		@media (max-width: 768px) {
			column-gap: 0.5rem;
		}
	}

	a.logo {
		text-decoration: none;
		color: var(--text);
		cursor: pointer;
		grid-template-columns: repeat(2, auto);
		justify-content: flex-start;
	}

	.buttons {
		grid-template-columns: repeat(5, auto);
		justify-content: flex-end;

		@media (max-width: 768px) {
			display: none;
		}
	}

	.mobile-buttons {
		display: none;

		@media (max-width: 768px) {
			display: grid;
			grid-template-columns: repeat(2, auto);
			justify-content: flex-end;
		}
	}
`;

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

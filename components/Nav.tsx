import { FC, useContext, useState } from 'react';
import { DarkModeContext } from './DarkMode';
import { useRouter } from 'next/router';
import styled from 'styled-components';
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

	div {
		display: grid;
		align-items: center;
		column-gap: 1rem;

		@media (max-width: 768px) {
			column-gap: 0.5rem;
		}
	}

	.logo {
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
	const router = useRouter();

	return (
		<Bar>
			<div className='logo' onClick={() => router.push('/')}>
				<Image
					className='logo-image'
					src={dark ? '/light-logo.svg' : '/dark-logo.svg'}
					alt='Logo Image'
					width={48}
					height={48}
				/>
				<h1>Hazem Krimi</h1>
			</div>
			<div className='buttons'>
				<IconButton icon={dark ? '/icons/sun.svg' : '/icons/moon.svg'} onClick={toggle} />
				<Button onClick={() => router.push('/about')}>About</Button>
				<Button onClick={() => router.push('/portfolio')}>Portfolio</Button>
				<Button onClick={() => router.push('/blog')}>Blog</Button>
				<Button variant='outline' onClick={() => window.open('/resume.pdf', '_blank')}>
					Resume
				</Button>
			</div>
			<div className='mobile-buttons'>
				<Button variant='outline' onClick={() => window.open('/hazem-krimi.pdf', '_blank')}>
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

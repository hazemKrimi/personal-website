import { FC, useContext } from 'react';
import { DarkModeContext } from './DarkMode';
import styled from 'styled-components';
import Image from 'next/image';
import Button from './Button';
import IconButton from './IconButton';
import { useRouter } from 'next/router';

const Bar = styled.nav`
	user-select: none;
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	padding: 1rem 0rem;

	h2 {
		font-size: 1.7rem;
	}

	div {
		display: grid;
		align-items: center;
		column-gap: 1rem;
	}

	.logo {
		cursor: pointer;
		grid-template-columns: repeat(2, auto);
		justify-content: flex-start;
	}

	.buttons {
		grid-template-columns: repeat(5, auto);
		justify-content: flex-end;
	}
`;

const Nav: FC = () => {
	const { dark, toggle } = useContext(DarkModeContext);
	const router = useRouter();

	return (
		<Bar>
			<div className='logo'>
				<Image className='logo-image' src='/logo.jpg' alt='Logo Image' width={48} height={48} />
				<h2>Hazem Krimi</h2>
			</div>
			<div className='buttons'>
				<IconButton icon={dark ? '/sun.svg' : '/moon.svg'} onClick={toggle} />
				<Button>About</Button>
				<Button>Blog</Button>
				<Button>Portfolio</Button>
				<Button variant='outline' onClick={() => router.push('/resume.pdf')}>
					Resume
				</Button>
			</div>
		</Bar>
	);
};

export default Nav;

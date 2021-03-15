import { FC, useContext } from 'react';
import { DarkModeContext } from '../components/DarkMode';
import styled from 'styled-components';
import IconButton from '../components/IconButton';

const StyledFooter = styled.footer`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 2rem;
	justify-content: flex-end;
	align-content: center;
	padding: 1rem 0rem;

	.contact {
		display: grid;
		grid-template-columns: repeat(auto-fill, 16px);
		column-gap: 1rem;
		align-items: center;
		justify-content: flex-start;

		* {
			user-select: none;
		}

		@media (max-width: 768px) {
			column-gap: 0.5rem;
		}
	}

	p {
		display: inline;
		text-align: right;
		font-weight: bold;
	}
`;

const Footer: FC = () => {
	const { dark } = useContext(DarkModeContext);

	return (
		<StyledFooter>
			<div className='contact'>
				<IconButton
					icon={dark ? '/icons/light-github.svg' : '/icons/dark-github.svg'}
					width={16}
					height={16}
					onClick={() => window.open('https://github.com/hazemKrimi', '_blank')}
				/>
				<IconButton
					icon={dark ? '/icons/light-twitter.svg' : '/icons/dark-twitter.svg'}
					width={16}
					height={16}
					onClick={() => window.open('https://twitter.com/HazemKrimi', '_blank')}
				/>
				<IconButton
					icon={dark ? '/icons/light-linkedin.svg' : '/icons/dark-linkedin.svg'}
					width={16}
					height={16}
					onClick={() => window.open('https://linkedin.com/in/hazemkrimi', '_blank')}
				/>
				<IconButton
					icon={dark ? '/icons/light-codepen.svg' : '/icons/dark-codepen.svg'}
					width={16}
					height={16}
					onClick={() => window.open('https://codepen.io/hazemkrimi', '_blank')}
				/>
				<IconButton
					icon={dark ? '/icons/light-dribbble.svg' : '/icons/dark-dribbble.svg'}
					width={16}
					height={16}
					onClick={() => window.open('https://dribbble.com/HazemKrimi', '_blank')}
				/>
			</div>
			<p>Hazem Krimi &copy; {new Date().getFullYear()}</p>
		</StyledFooter>
	);
};

export default Footer;

import { FC, useContext } from 'react';
import { DarkModeContext } from '../../components/DarkMode';
import { StyledFooter } from './styles';
import IconButton from '../../components/IconButton';

const Footer: FC = () => {
	const { dark } = useContext(DarkModeContext);

	return (
		<StyledFooter>
			<div className='contact'>
				<IconButton
					icon={dark ? '/icons/light-github.svg' : '/icons/dark-github.svg'}
					width={16}
					height={16}
					href='https://github.com/hazemKrimi'
					target='_blank'
				/>
				<IconButton
					icon={dark ? '/icons/light-twitter.svg' : '/icons/dark-twitter.svg'}
					width={16}
					height={16}
					href='https://twitter.com/HazemKrimi'
					target='_blank'
				/>
				<IconButton
					icon={dark ? '/icons/light-linkedin.svg' : '/icons/dark-linkedin.svg'}
					width={16}
					height={16}
					href='https://linkedin.com/in/hazemkrimi'
					target='_blank'
				/>
				<IconButton
					icon={dark ? '/icons/light-codepen.svg' : '/icons/dark-codepen.svg'}
					width={16}
					height={16}
					href='https://codepen.io/hazemkrimi'
					target='_blank'
				/>
				<IconButton
					icon={dark ? '/icons/light-dribbble.svg' : '/icons/dark-dribbble.svg'}
					width={16}
					height={16}
					href='https://dribbble.com/HazemKrimi'
					target='_blank'
				/>
			</div>
			<p>Hazem Krimi &copy; {new Date().getFullYear()}</p>
		</StyledFooter>
	);
};

export default Footer;

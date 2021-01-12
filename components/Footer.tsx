import { FC } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	display: grid;
	justify-content: flex-end;
	align-content: center;
	padding: 1rem 0rem;

	p {
		display: inline;
		text-align: right;
		font-weight: bold;
	}
`;

const Footer: FC = () => {
	return (
		<StyledFooter>
			<p>Hazem Krimi &copy; {new Date().getFullYear()}</p>
		</StyledFooter>
	);
};

export default Footer;

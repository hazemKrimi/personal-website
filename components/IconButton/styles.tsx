import styled, { css } from 'styled-components';
import Link from 'next/link';

const sharedStyles = css`
    cursor: pointer;
	background: none;
	border: none;
	display: inline-flex;
	align-items: center;
`;

export const StyledLink = styled(Link)`
	${sharedStyles}
`;

export const StyledButton = styled.button`
    ${sharedStyles}
`;
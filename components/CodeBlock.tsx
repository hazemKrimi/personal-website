import { FC } from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

const Pre = styled.pre`
	text-align: left;
	margin: 1em 0;
	padding: 0.5em;
	overflow: scroll;
`;

const Line = styled.div`
	display: table-row;
`;

const LineNo = styled.span`
	display: table-cell;
	text-align: right;
	padding-right: 1em;
	user-select: none;
	opacity: 0.5;
`;

const LineContent = styled.span`
	display: table-cell;
`;

const CodeBlock: FC<{ className: string }> = ({ children, className }) => {
	const language = className.replace(/language-/, '') as Language;

	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={(children as string).trim()}
			language={language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<Pre className={className} style={style}>
					{tokens.map((line, i) => (
						<Line key={i} {...getLineProps({ line, key: i })}>
							<LineNo>{i + 1}</LineNo>
							<LineContent>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</LineContent>
						</Line>
					))}
				</Pre>
			)}
		</Highlight>
	);
};

export default CodeBlock;

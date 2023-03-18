import { FC } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { Line, LineContent, LineNo, Pre } from './styles';

const CodeBlock: FC<{ className: string, children: React.ReactNode }> = ({ children, className }) => {
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

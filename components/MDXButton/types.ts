export type Props = {
	variant?: 'outline' | 'text' | 'action';
	type?: 'button' | 'submit';
	link?: string;
	target?: HTMLAnchorElement['target'];
	mode?: string;
	disabled?: boolean;
};

export type Props = {
	variant?: 'outline' | 'text';
	href: string;
	target?: HTMLAnchorElement['target'];
	onClick?: () => void;
	dark?: boolean;
};

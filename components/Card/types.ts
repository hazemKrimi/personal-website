export interface Props {
	title: string;
	description: string;
	image?: string;
	tags?: string[];
	href: string;
	target?: HTMLAnchorElement['target'];
	onClick?: () => void;
}
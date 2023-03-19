export interface Props {
	alt: string;
	icon: string;
	width?: number;
	height?: number;
	href?: string;
	target?: HTMLAnchorElement['target'];
	onClick?: () => void;
    className?: string;
}
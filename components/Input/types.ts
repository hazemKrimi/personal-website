export interface Props {
	placeholder?: string;
	type: 'text' | 'email';
	variant: 'small' | 'big';
	name: string;
	value: string;
	required?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
}

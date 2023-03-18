import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			dark: {
				background: string;
				text: string;
			};
			light: {
				background: string;
				text: string;
			};
			blue: string;
		};
	}
}

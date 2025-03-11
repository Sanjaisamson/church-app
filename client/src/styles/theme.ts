/* eslint-disable @typescript-eslint/no-explicit-any */
import { extendTheme, ThemeConfig, withDefaultColorScheme, theme as baseTheme } from '@chakra-ui/react';
import { CustomThemeConfigType } from '../types/config.types';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const fonts = {
	heading: `'Work Sans', sans-serif`,
	body: `'Work Sans', sans-serif`,
};

const fontSizes = {
	header: '2.5rem',
	subHeader: '2rem',
};

const focusVisibleStyle = {
	_focusVisible: {
		borderColor: 'brand.500',
		boxShadow: 'none',
	},
};

const invalidFieldStyle = {
	_invalid: {
		boxShadow: 'none',
	},
};

const radii = {
	navItemRadius: '1.25rem',
};

const inputSelectStyles = {
	variants: {
		outline: {
			field: {
				...focusVisibleStyle,
				...invalidFieldStyle,
				borderColor: 'blackAlpha.400',
			},
			...focusVisibleStyle,
			...invalidFieldStyle,
		},
	},
	sizes: {
		md: {
			field: {
				borderRadius: 'lg',
			},
		},
		lg: {
			borderRadius: 'lg',
		},
	},
};

const linkStyles = {
	baseStyle: {
		fontWeight: 'bold',
		color: 'brand.500',
	},
};

const formLabelStyles = {
	baseStyle: {
		fontSize: 'sm',
	},
};

const shadows = {
	customBoxShadow: '0px 5px 10px 0px rgba(215, 215, 215, 0.55)', // Customize the box shadow value here
	cardShadow: '4px 4px 40px 0px rgba(215, 215, 215, 0.55)',
	navbarShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.10)',
	softBlueShadow: '0px 1px 2px 0px #A3B6C7',
};

const customColors = {
	orange: {
		...baseTheme.colors.orange,
		500: '#FF8A00',
		transparent: '#FF8A0033',
		50: 'rgba(255, 138, 0, 0.25)',
	},
	pink: {
		...baseTheme.colors.pink,
		500: '#B961FF',
		transparent: 'rgba(185, 97, 255, 0.25)',
		800: '#6500B8',
	},
	green: {
		...baseTheme.colors.green,
		500: '#00CD4D',
		700: '#005721',
		transparent: '#00CD4D25',
		25: 'rgba(0, 205, 77, 0.25)',
	},
	gray: {
		...baseTheme.colors.gray,
		150: '#FAFAFA',
		650: '#6B6B6B',
		dark: '#AFB0B4',
		750: '#EEF3FC',
		800: '#4D4D4D',
	},
	red: {
		...baseTheme.colors.red,
		650: '#CC3862',
		transparent: '#CC386225',
		750: '#BC0017',
		25: 'rgba(255, 0, 31, 0.25)',
	},
	blue: {
		...baseTheme.colors.blue,
		500: '#0063ff',
		50: '#f2f4fa',
		customBlueTransparent: 'rgba(0, 99, 255, 0.10)',
		dark: '#003994',
		25: 'rgba(0, 99, 255, 0.25)',
	},
	ev: {
		...baseTheme.colors.green,
		500: '#17C064',
		600: '#17C064',
		700: '#17C064',
		deepTurquoise: '#0D211D',
		blue: '#2DA4FF',
		greenPrimary: '#17C064',
		black: '#121212',
		green: '#17C064',
		lightGrey: '#C6C6C6',
		mediumGrey: '#5D5D5D',
		darkGrey: '#1B1B1B',
		mutedTurquoiseDark: '#152C28',
		forestGreenAlpha: 'rgba(7, 26, 22, 0.70)',
		red: '#C11C43',
		lightRed: '#C01740',
	},
	brown: {
		500: '#703C00',
	},
};

const customButtonVariants = {
	blackButton: {
		bg: 'ev.black',
		color: 'white',
		borderWidth: '2px',
		borderColor: 'white',
		borderRadius: '8px',
		_hover: {
			bg: 'ev.black',
		},
		_active: {
			bg: 'gray.800',
		},
		_disabled: {
			bg: 'gray.600',
			color: 'gray.300',
			cursor: 'not-allowed',
			opacity: 0.6,
		},
	},
	redButton: {
		bg: 'ev.red',
		color: 'white',
		_hover: {
			bg: 'ev.red',
		},
		_active: {
			bg: 'ev.red',
		},
	},
};

const getDefaultTheme = () => {
	// Update the base colors here
	const colors: Record<string, any> = {
		brand: {
			...baseTheme.colors.blue, // Use blue as the base color
			50: '#f2f4fa', // Adjust shades as needed
			500: '#0063ff', // Main brand color
			white: '#ffffff',
			fault: '#CC3862',
			active: '#0063ff', // Change active color to match blue theme
			faultLite: '#CC386225',
			activeLite: 'rgba(0, 99, 255, 0.25)',
			activeNavMenuBgColor: 'rgba(0, 99, 255, 0.15)', // Update to blue
			inactiveNavMenuBgColor: '#FFFFFF',
			textColor: '#000', // Main text color
			bodyBgColor: '#FFFFFF', // Background color of the body
		},
		...customColors,
		dashboard: {
			revenue: '#0063FF', // Update dashboard colors if needed
			chargingSessions: '#0063FF',
			consumption: '#B961FF',
			avgSessionTime: '#B961FF',
			avgConsumption: '#B961FF',
			usageByTime: ['#0063FF', '#5E9CFF', '#0063ff40'],
			usageTopBorderColor: '#0063FF',
			sessionByUserType: ['#0063FF', '#6ca5fe', '#a6c9ff'],
		},
	};

	const defaultTheme = extendTheme(
		{
			config,
			colors,
			fonts,
			fontSizes,
			shadows,
			radii,
			styles: {
				global: {
					body: {
						color: colors.brand.textColor,
						bg: colors.brand.bodyBgColor,
					},
				},
			},
			components: {
				Input: { ...inputSelectStyles },
				Select: { ...inputSelectStyles },
				Textarea: { ...inputSelectStyles },
				FormLabel: { ...formLabelStyles },
				Link: { ...linkStyles },
				NumberInput: {
					...inputSelectStyles,
				},
				NumberInputField: {
					...inputSelectStyles,
				},
				Button: {
					variants: {
						...customButtonVariants,
					},
				},
				Table: {
					variants: {
						simple: {
							td: {
								color: 'brand.textColor',
							},
							th: {
								color: 'brand.textColor',
							},
						},
					},
				},
			},
		},
		withDefaultColorScheme({ colorScheme: 'brand' }),
	);

	return defaultTheme;
};


const generateTheme = (serverThemeData?: CustomThemeConfigType): Record<string, any> => {
	if (!serverThemeData) {
		return getDefaultTheme();
	}
	const { colors: themeConfig, assets } = serverThemeData;
	const {
		brand: { primaryColor, textColor, bodyBgColor, activeNavMenuBgColor, inactiveNavMenuBgColor },
	} = themeConfig;
	const colors: Record<string, any> = {
		brand: {
			...baseTheme.colors[primaryColor?.baseColor || 'blue'], // Default to blue
			'500': primaryColor?.code || '#0063FF', // Main brand color
			activeNavMenuBgColor: activeNavMenuBgColor || 'rgba(0, 99, 255, 0.15)',
			inactiveNavMenuBgColor: inactiveNavMenuBgColor || '#FFFFFF',
		},
		...customColors,
		dashboard: themeConfig?.dashboard || {},
	};

	const customTheme = extendTheme(
		{
			config,
			colors,
			fonts,
			fontSizes,
			assets,
			radii,
			shadows,
			styles: {
				global: {
					body: {
						color: textColor,
						bg: bodyBgColor,
					},
				},
			},
			components: {
				Input: { ...inputSelectStyles },
				Select: { ...inputSelectStyles },
				Textarea: { ...inputSelectStyles },
				FormLabel: { ...formLabelStyles },
				NumberInput: {
					...inputSelectStyles,
				},
				NumberInputField: {
					...inputSelectStyles },
				Button: {
					variants: {
						...customButtonVariants,
					},
				},
				Table: {
					variants: {
						simple: {
							td: {
								color: textColor,
							},
							th: {
								color: textColor,
							},
						},
					},
				},
			},
		},
		withDefaultColorScheme({ colorScheme: 'brand' }),
	);

	return customTheme;
};


export { generateTheme, getDefaultTheme };

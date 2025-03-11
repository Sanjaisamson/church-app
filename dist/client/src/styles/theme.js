"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultTheme = exports.generateTheme = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("@chakra-ui/react");
const config = {
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
        outline: Object.assign(Object.assign({ field: Object.assign(Object.assign(Object.assign({}, focusVisibleStyle), invalidFieldStyle), { borderColor: 'blackAlpha.400' }) }, focusVisibleStyle), invalidFieldStyle),
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
    orange: Object.assign(Object.assign({}, react_1.theme.colors.orange), { 500: '#FF8A00', transparent: '#FF8A0033', 50: 'rgba(255, 138, 0, 0.25)' }),
    pink: Object.assign(Object.assign({}, react_1.theme.colors.pink), { 500: '#B961FF', transparent: 'rgba(185, 97, 255, 0.25)', 800: '#6500B8' }),
    green: Object.assign(Object.assign({}, react_1.theme.colors.green), { 500: '#00CD4D', 700: '#005721', transparent: '#00CD4D25', 25: 'rgba(0, 205, 77, 0.25)' }),
    gray: Object.assign(Object.assign({}, react_1.theme.colors.gray), { 150: '#FAFAFA', 650: '#6B6B6B', dark: '#AFB0B4', 750: '#EEF3FC', 800: '#4D4D4D' }),
    red: Object.assign(Object.assign({}, react_1.theme.colors.red), { 650: '#CC3862', transparent: '#CC386225', 750: '#BC0017', 25: 'rgba(255, 0, 31, 0.25)' }),
    blue: Object.assign(Object.assign({}, react_1.theme.colors.blue), { 500: '#0063ff', 50: '#f2f4fa', customBlueTransparent: 'rgba(0, 99, 255, 0.10)', dark: '#003994', 25: 'rgba(0, 99, 255, 0.25)' }),
    ev: Object.assign(Object.assign({}, react_1.theme.colors.green), { 500: '#17C064', 600: '#17C064', 700: '#17C064', deepTurquoise: '#0D211D', blue: '#2DA4FF', greenPrimary: '#17C064', black: '#121212', green: '#17C064', lightGrey: '#C6C6C6', mediumGrey: '#5D5D5D', darkGrey: '#1B1B1B', mutedTurquoiseDark: '#152C28', forestGreenAlpha: 'rgba(7, 26, 22, 0.70)', red: '#C11C43', lightRed: '#C01740' }),
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
    const colors = Object.assign(Object.assign({ brand: Object.assign(Object.assign({}, react_1.theme.colors.blue), { 50: '#f2f4fa', 500: '#0063ff', white: '#ffffff', fault: '#CC3862', active: '#0063ff', faultLite: '#CC386225', activeLite: 'rgba(0, 99, 255, 0.25)', activeNavMenuBgColor: 'rgba(0, 99, 255, 0.15)', inactiveNavMenuBgColor: '#FFFFFF', textColor: '#000', bodyBgColor: '#FFFFFF' }) }, customColors), { dashboard: {
            revenue: '#0063FF', // Update dashboard colors if needed
            chargingSessions: '#0063FF',
            consumption: '#B961FF',
            avgSessionTime: '#B961FF',
            avgConsumption: '#B961FF',
            usageByTime: ['#0063FF', '#5E9CFF', '#0063ff40'],
            usageTopBorderColor: '#0063FF',
            sessionByUserType: ['#0063FF', '#6ca5fe', '#a6c9ff'],
        } });
    const defaultTheme = (0, react_1.extendTheme)({
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
            Input: Object.assign({}, inputSelectStyles),
            Select: Object.assign({}, inputSelectStyles),
            Textarea: Object.assign({}, inputSelectStyles),
            FormLabel: Object.assign({}, formLabelStyles),
            Link: Object.assign({}, linkStyles),
            NumberInput: Object.assign({}, inputSelectStyles),
            NumberInputField: Object.assign({}, inputSelectStyles),
            Button: {
                variants: Object.assign({}, customButtonVariants),
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
    }, (0, react_1.withDefaultColorScheme)({ colorScheme: 'brand' }));
    return defaultTheme;
};
exports.getDefaultTheme = getDefaultTheme;
const generateTheme = (serverThemeData) => {
    if (!serverThemeData) {
        return getDefaultTheme();
    }
    const { colors: themeConfig, assets } = serverThemeData;
    const { brand: { primaryColor, textColor, bodyBgColor, activeNavMenuBgColor, inactiveNavMenuBgColor }, } = themeConfig;
    const colors = Object.assign(Object.assign({ brand: Object.assign(Object.assign({}, react_1.theme.colors[(primaryColor === null || primaryColor === void 0 ? void 0 : primaryColor.baseColor) || 'blue']), { '500': (primaryColor === null || primaryColor === void 0 ? void 0 : primaryColor.code) || '#0063FF', activeNavMenuBgColor: activeNavMenuBgColor || 'rgba(0, 99, 255, 0.15)', inactiveNavMenuBgColor: inactiveNavMenuBgColor || '#FFFFFF' }) }, customColors), { dashboard: (themeConfig === null || themeConfig === void 0 ? void 0 : themeConfig.dashboard) || {} });
    const customTheme = (0, react_1.extendTheme)({
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
            Input: Object.assign({}, inputSelectStyles),
            Select: Object.assign({}, inputSelectStyles),
            Textarea: Object.assign({}, inputSelectStyles),
            FormLabel: Object.assign({}, formLabelStyles),
            NumberInput: Object.assign({}, inputSelectStyles),
            NumberInputField: Object.assign({}, inputSelectStyles),
            Button: {
                variants: Object.assign({}, customButtonVariants),
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
    }, (0, react_1.withDefaultColorScheme)({ colorScheme: 'brand' }));
    return customTheme;
};
exports.generateTheme = generateTheme;

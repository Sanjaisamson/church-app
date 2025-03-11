type Color = {
	code: string;
	baseColor:
		| 'blackAlpha'
		| 'gray'
		| 'red'
		| 'orange'
		| 'yellow'
		| 'green'
		| 'teal'
		| 'blue'
		| 'cyan'
		| 'purple'
		| 'pink'
		| 'linkedin'
		| 'facebook'
		| 'messenger'
		| 'whatsapp'
		| 'twitter'
		| 'telegram';
};

type BrandColors = {
	primaryColor: Color;
	secondaryColor: Color;
	tertiaryColor: Color;
	textColor: string;
	bodyBgColor: string;
	activeNavMenuBgColor: string;
	inactiveNavMenuBgColor: string;
};

type DashboardWidgetColors = {
	[key: string]: string[] | string;
};

type Colors = {
	brand: BrandColors;
	dashboard?: DashboardWidgetColors;
};

type Assets = {
	[assetName: string]: string;
};

type FontFile = {
	url: string;
	format: string;
};

export type Translation = {
	[language: string]: { [key: string]: string };
};

export interface ClientConfigType {
	themeConfig: CustomThemeConfigType;
	translation?: Translation;
	language: string;
	analyticsId: string;
}

export type CustomThemeConfigType = {
	colors: Colors;
	fonts?: { body: string; heading: string };
	fontFiles?: { body: FontFile; heading: FontFile };
	assets?: Assets;
};

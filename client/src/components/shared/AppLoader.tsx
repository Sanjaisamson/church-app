import React, { FC } from 'react';
import { Box, Spinner, Text, BoxProps, SpinnerProps, TextProps, ChakraProvider } from '@chakra-ui/react';

interface LoaderProps {
	spinnerSize?: SpinnerProps['size'];
	spinnerColor?: SpinnerProps['color'];
	spinnerThickness?: SpinnerProps['thickness'];
	spinnerSpeed?: SpinnerProps['speed'];
	text?: string;
	textProps?: TextProps;
	boxProps?: BoxProps;
}

const AppLoader: FC<LoaderProps> = ({
	spinnerSize = 'xl',
	spinnerColor = 'green.500',
	spinnerThickness = '4px',
	spinnerSpeed = '0.65s',
	text = 'Loading...',
	textProps,
	boxProps,
}) => {
	return (
		<ChakraProvider>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				position="fixed"
				top={0}
				left={0}
				width="100%"
				height="100%"
				{...boxProps}
			>
				<Spinner size={spinnerSize} color={spinnerColor} thickness={spinnerThickness} speed={spinnerSpeed} emptyColor="gray.200" />
				<Text fontSize="lg" fontWeight="bold" mt={4} {...textProps}>
					{text}
				</Text>
			</Box>
		</ChakraProvider>
	);
};

export default AppLoader;

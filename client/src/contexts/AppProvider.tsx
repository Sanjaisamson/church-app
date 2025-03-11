import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			networkMode: 'offlineFirst',
		},
	},
});

type AppProviderProps = {
	children: React.ReactNode;
	theme: Record<string, unknown>;
};
const AppProvider: React.FC<AppProviderProps> = ({ children, theme }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<DndProvider backend={HTML5Backend}>{children}</DndProvider>
			</ChakraProvider>
		</QueryClientProvider>
	);
};

export default AppProvider;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_query_1 = require("@tanstack/react-query");
const react_dnd_1 = require("react-dnd");
const react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
const queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            networkMode: 'offlineFirst',
        },
    },
});
const AppProvider = ({ children, theme }) => {
    return (<react_query_1.QueryClientProvider client={queryClient}>
			<react_1.ChakraProvider theme={theme}>
				<react_dnd_1.DndProvider backend={react_dnd_html5_backend_1.HTML5Backend}>{children}</react_dnd_1.DndProvider>
			</react_1.ChakraProvider>
		</react_query_1.QueryClientProvider>);
};
exports.default = AppProvider;

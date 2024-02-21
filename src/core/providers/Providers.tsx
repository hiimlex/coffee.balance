import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoreRouter } from "../router/Router";
import { AppStore } from "../store";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

const CoreProviders: React.FC = () => {
	return (
		<StoreProvider store={AppStore}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={CoreRouter}></RouterProvider>
			</ThemeProvider>
		</StoreProvider>
	);
};

export { CoreProviders };

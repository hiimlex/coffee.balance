import { ThemeProvider } from "styled-components";
import { CoreRouter } from "../router/Router";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";
import { RouterProvider } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { AppStore } from "../store";

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

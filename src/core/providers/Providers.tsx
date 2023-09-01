import { ThemeProvider } from "styled-components";
import { CoreRouter } from "../router/Router";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";
import { RouterProvider } from "react-router-dom";

const CoreProviders: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RouterProvider router={CoreRouter}></RouterProvider>
		</ThemeProvider>
	);
};

export { CoreProviders };

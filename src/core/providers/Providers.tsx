import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoreRouter } from "../router/Router";
import { AppStore } from "../store";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

import { useCallback, useEffect, useState } from "react";
import OneSignal from "react-onesignal";

const CoreProviders: React.FC = () => {
	const [init, setInit] = useState(false);

	const initOneSignal = useCallback(async () => {
		try {
			if (init) return;

			await OneSignal.init({
				appId: "0fbccbba-40af-4969-9855-747fc4dfbb5b",
			});

			setInit(true);
			OneSignal.Slidedown.promptPush();
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		initOneSignal();
	}, []);

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

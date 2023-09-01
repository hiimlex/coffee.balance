import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const BalanceModule = lazy(
	() => import("../../app/modules/BalanceModule/BalanceModule")
);

const CoreRouter = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<>loading</>}>
				<BalanceModule />
			</Suspense>
		),
	},
]);

export { CoreRouter };

import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const BalanceModule = lazy(
	() => import("../../app/modules/BalanceModule/BalanceModule")
);

const CoreRouter = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/coffee.balance" />,
	},
	{
		path: "/coffee.balance",
		element: (
			<Suspense fallback={<>loading</>}>
				<BalanceModule />
			</Suspense>
		),
	},
]);

export { CoreRouter };

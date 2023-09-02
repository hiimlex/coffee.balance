import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const BalanceModule = lazy(
	() => import("../../app/modules/BalanceModule/BalanceModule")
);

const StepperModule = lazy(
	() => import("../../app/modules/StepperModule/StepperModule")
);

const CoreRouter = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/coffee-balance" />,
	},
	{
		path: "/coffee-balance",
		element: (
			<Suspense fallback={<>loading</>}>
				<BalanceModule />
			</Suspense>
		),
	},
	{
		path: "/stepper",
		element: (
			<Suspense fallback={<>loading</>}>
				<StepperModule />
			</Suspense>
		),
	},
]);

export { CoreRouter };

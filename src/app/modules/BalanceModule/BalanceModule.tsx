import { RootState } from "@/core/store";
import { useSelector } from "react-redux";
import { MainView, StepperView } from "./views";
import { useCallback, useEffect } from "react";

const BalanceModule: React.FC = () => {
	const step = useSelector((state: RootState) => state.recipeMaker.step);

	const getPersistedRecipe = useCallback(() => {}, []);

	useEffect(() => {
		getPersistedRecipe();
	}, [getPersistedRecipe]);

	return (
		<>
			{step === "balance" && <MainView></MainView>}
			{step === "stepper" && <StepperView></StepperView>}
		</>
	);
};

export default BalanceModule;

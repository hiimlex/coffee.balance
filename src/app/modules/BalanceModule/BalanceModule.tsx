import {
	AppDispatch,
	RECIPE_MAKER_LOCALSTORAGE_KEY,
	RootState,
	changeStep,
	generateRecipeStepper,
} from "@/core/store";
import { useDispatch, useSelector } from "react-redux";
import { MainView, StepperView } from "./views";
import { useCallback, useEffect } from "react";
import { RecipesService } from "@/app/api/services";

const BalanceModule: React.FC = () => {
	const step = useSelector((state: RootState) => state.recipeMaker.step);
	const dispatch = useDispatch<AppDispatch>();

	const getPersistedRecipe = useCallback(() => {
		const recipeMaker = localStorage.getItem(RECIPE_MAKER_LOCALSTORAGE_KEY);

		if (recipeMaker) {
			const parsedRecipeMaker = JSON.parse(recipeMaker);

			if (parsedRecipeMaker) {
				const { data } = parsedRecipeMaker;
				const recipe = RecipesService.all.find(
					(recipe) => recipe.name === parsedRecipeMaker.recipeName
				);

				if (recipe && data) {
					dispatch(generateRecipeStepper({ recipe, data }));
					dispatch(changeStep("stepper"));
				}
			}
		}
	}, []);

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

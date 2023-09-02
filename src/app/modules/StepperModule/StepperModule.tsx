import { RecipesService } from "@/app/api/services";
import {
	RECIPE_MAKER_LOCALSTORAGE_KEY,
	RootState,
	generateRecipeStepper,
} from "@/core/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StepperView } from "./views";

const StepperModule: React.FC = () => {
	const { data, recipe } = useSelector((state: RootState) => state.recipeMaker);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const persistedRecipe = localStorage.getItem(RECIPE_MAKER_LOCALSTORAGE_KEY);

		if (!data && !recipe && !persistedRecipe) {
			navigate("/");
		} else {
			const parsedRecipe = JSON.parse(persistedRecipe || "{}");

			if (!!parsedRecipe && Object.keys(parsedRecipe).length > 0) {
				const recipeName = parsedRecipe.recipeName;

				if (recipeName) {
					const recipe = RecipesService.all.find(
						(recipe) => recipe.name === recipeName
					);

					if (recipe) {
						dispatch(
							generateRecipeStepper({
								recipe,
								data: parsedRecipe.data,
							})
						);
					}
				}
			}
		}
	}, []);

	return (
		<>
			{recipe && data ? (
				<StepperView recipe={recipe} data={data} />
			) : (
				<div>ops something wrong happened</div>
			)}
		</>
	);
};

export default StepperModule;

import { IMakeRecipeDataDTO, IRecipeDTO } from "@/app/api";
import {
	CoreButton,
	CoreHeader,
	CoreInput,
	CoreSelectRecipe,
} from "@/core/components";
import {
	AppDispatch,
	RECIPE_MAKER_LOCALSTORAGE_KEY,
	changeStep,
	generateRecipeStepper,
} from "@/core/store";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { StyledMainViewContainer, StyledMainViewForm } from "./styles";

const MainView: React.FC = () => {
	const { register, getValues, setValue, formState, trigger } = useForm({
		mode: "all",
		defaultValues: {
			grounds: "",
			ratio: "",
		},
	});
	const [recipe, setRecipe] = useState<IRecipeDTO | undefined>();

	const dispatch = useDispatch<AppDispatch>();

	const handleSelectRecipe = (recipe: IRecipeDTO) => {
		trigger("grounds");
		trigger("ratio");

		setRecipe(recipe);

		const ratio = getValues("ratio");
		if (!ratio) {
			setValue("ratio", recipe.recommendedRatio.toString());
		}
	};

	const handleGenerate = () => {
		const { grounds, ratio } = getValues();

		const data: IMakeRecipeDataDTO = {
			blooming: true,
			grounds: parseInt(grounds),
			ratio: parseInt(ratio),
		};

		if (recipe) {
			dispatch(generateRecipeStepper({ recipe, data }));

			localStorage.setItem(
				RECIPE_MAKER_LOCALSTORAGE_KEY,
				JSON.stringify({ recipeName: recipe.name, data })
			);

			dispatch(changeStep("stepper"));
		}
	};

	return (
		<StyledMainViewContainer>
			<CoreHeader />

			<StyledMainViewForm>
				<CoreInput
					inputProps={
						{
							type: "number",
							placeholder: "coffee grounds",
							pattern: "[0-9][.]*",
							inputmode: "numeric",
						} as any
					}
					width="100%"
					suffix="g"
					register={register("grounds", {
						required: true,
						min: 1,
						pattern: /^[0-9.,]+$/,
					})}
				/>

				<CoreSelectRecipe
					selectedRecipeName={recipe?.name}
					onSelectRecipe={handleSelectRecipe}
				/>

				<CoreInput
					inputProps={
						{
							type: "number",
							placeholder: "ratio",
							pattern: "[0-9][.]*",
							inputmode: "numeric",
						} as any
					}
					prefix="1:"
					width="100%"
					suffix="g:ml"
					register={register("ratio", {
						required: true,
						min: 1,
						pattern: /^[0-9.,]+$/,
					})}
				/>
				{/* <CoreSelect
					placeholder="brew method"
					options={[
						{
							label: "v60",
							value: "v60",
						},
					]}
					width="100%"
					register={register("method", { required: true })}
				/> */}

				<CoreButton
					disabled={!recipe || !formState.isValid}
					variant="primary"
					onClick={handleGenerate}
				>
					generate
				</CoreButton>
			</StyledMainViewForm>
		</StyledMainViewContainer>
	);
};

export default MainView;

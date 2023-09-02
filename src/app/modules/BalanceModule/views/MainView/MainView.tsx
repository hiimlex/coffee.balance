import { IMakeRecipeDataDTO, IRecipeDTO } from "@/app/api";
import {
	CoreButton,
	CoreHeader,
	CoreInput,
	CoreSelect,
	CoreSelectRecipe,
} from "@/core/components";
import {
	AppDispatch,
	RECIPE_MAKER_LOCALSTORAGE_KEY,
	generateRecipeStepper,
} from "@/core/store";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { StyledMainViewContainer, StyledMainViewForm } from "./styles";
import { useNavigate } from "react-router-dom";

const MainView: React.FC = () => {
	const { register, getValues, formState, trigger } = useForm({
		mode: "all",
		defaultValues: {
			method: "",
			grounds: "",
			ratio: "",
		},
	});
	const [recipe, setRecipe] = useState<IRecipeDTO | undefined>();
	const navigate = useNavigate();

	const dispath = useDispatch<AppDispatch>();

	const handleSelectRecipe = (recipe: IRecipeDTO) => {
		trigger("grounds");
		trigger("ratio");
		trigger("method");

		setRecipe(recipe);
	};

	const handleGenerate = () => {
		const { grounds, method, ratio } = getValues();

		const data: IMakeRecipeDataDTO = {
			method,
			blooming: true,
			grounds: parseInt(grounds),
			ratio: parseInt(ratio),
		};

		if (recipe) {
			dispath(
				generateRecipeStepper({
					recipe,
					data,
				})
			);

			localStorage.setItem(
				RECIPE_MAKER_LOCALSTORAGE_KEY,
				JSON.stringify({ recipeName: recipe.name, data })
			);

			navigate("/stepper");
		}
	};

	return (
		<StyledMainViewContainer>
			<CoreHeader />

			<StyledMainViewForm>
				<CoreInput
					inputProps={{
						type: "number",
						placeholder: "coffee grounds",
					}}
					width="100%"
					suffix="g"
					register={register("grounds", { required: true, min: 1 })}
				/>

				<CoreInput
					inputProps={{
						type: "number",
						placeholder: "ratio",
					}}
					prefix="1:"
					width="100%"
					suffix="g:ml"
					register={register("ratio", { required: true, min: 1 })}
				/>
				<CoreSelect
					placeholder="brew method"
					options={[
						{
							label: "v60",
							value: "v60",
						},
					]}
					width="100%"
					register={register("method", { required: true })}
				/>

				<CoreSelectRecipe
					selectedRecipeName={recipe?.name}
					onSelectRecipe={handleSelectRecipe}
				/>

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

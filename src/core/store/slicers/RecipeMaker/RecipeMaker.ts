import { IMakeRecipeDataDTO, IRecipeDTO } from "@/app/api";
import { SliceCaseReducers, createSlice } from "@reduxjs/toolkit";
import { IGenericAction } from "../../Store";

interface IRecipeMakerState {
	recipe?: IRecipeDTO;
	data?: IMakeRecipeDataDTO;
}

export const RECIPE_MAKER_LOCALSTORAGE_KEY = "recipeMaker";

const initialState: IRecipeMakerState = {};

const RecipeMaker = createSlice<
	IRecipeMakerState,
	SliceCaseReducers<IRecipeMakerState>,
	string
>({
	name: "recipeMaker",
	initialState,
	reducers: {
		generateRecipeStepper: (
			state,
			action: IGenericAction<{
				recipe: IRecipeDTO;
				data: IMakeRecipeDataDTO;
			}>
		) => {
			state.recipe = action.payload.recipe;
			state.data = action.payload.data;
		},
	},
});

export const { generateRecipeStepper } = RecipeMaker.actions;

export default RecipeMaker;

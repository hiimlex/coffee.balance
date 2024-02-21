import { IMakeRecipeDataDTO, IRecipeDTO, TEntrySteps } from "@/app/api";
import {
	ActionCreatorWithPayload,
	SliceCaseReducers,
	createSlice,
} from "@reduxjs/toolkit";
import { IGenericAction } from "../../Store";

interface IRecipeMakerState {
	recipe?: IRecipeDTO;
	data?: IMakeRecipeDataDTO;
	step: TEntrySteps;
}

export const RECIPE_MAKER_LOCALSTORAGE_KEY = "recipeMaker";

const initialState: IRecipeMakerState = {
	step: "balance",
};

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
		changeStep: (state, action: IGenericAction<TEntrySteps>) => {
			state.step = action.payload;
		},
	},
});

export const generateRecipeStepper = RecipeMaker.actions
	.generateRecipeStepper as ActionCreatorWithPayload<{
	recipe: IRecipeDTO;
	data: IMakeRecipeDataDTO;
}>;
export const changeStep = RecipeMaker.actions
	.changeStep as ActionCreatorWithPayload<TEntrySteps>;

export default RecipeMaker;

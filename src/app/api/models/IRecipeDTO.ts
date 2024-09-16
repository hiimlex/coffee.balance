export interface IRecipeStepDTO {
	label: string;
	isTimer?: boolean;
}

export interface IMakeRecipeDataDTO {
	grounds: number;
	ratio: number;
	blooming: boolean;
}

export interface IMakeRecipeDTO {
	recipe: IRecipeDTO;
	data: IMakeRecipeDataDTO;
}

export type IRecipeMethods =
	| "french press"
	| "iced coffee"
	| "pour over"
	| "v60"
	| "immersion"
	| "dripper"
	| "cold brew"
	| "brikka"
	| "moka"
	| "melitta";

export interface IRecipeDTO<StepProps = any, StepName = any> {
	name: string;
	methods: IRecipeMethods[];
	minutes: number;
	pours: number;
	recommendedGrindSize: string;
	recommendedRatio: number;
	tip: string;
	steps: Array<keyof StepName>;
	stepsObject: Record<keyof StepName, IRecipeStepDTO>;
	formula: (
		grounds: number,
		ratio: number
	) => Record<keyof StepProps, number | string>;
}

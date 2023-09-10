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

export interface IRecipeDTO<StepProps = any, StepName = any> {
	name: string;
	methods: string[];
	minutes: number;
	pours: number;
	recommendedGrindSize: string;
	recommendedRatio: number;
	tip: string;
	steps: string[];
	stepsObject: Record<keyof StepName, IRecipeStepDTO>;
	formula: (
		grounds: number,
		ratio: number
	) => Record<keyof StepProps, number | string>;
}

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
	description: string;
	methods: string[];
	pours: number;
	minutes: number;
	recommendedGrindSize: string;
	recommendedRatio: number;
	steps: string[];
	stepsObject: Record<keyof StepName, IRecipeStepDTO>;
	formula: (
		grounds: number,
		ratio: number
	) => Record<keyof StepProps, number | string>;
}

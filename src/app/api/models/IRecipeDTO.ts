export interface IRecipeStepDTO {
	label: string;
	isTimer?: boolean;
}

export interface IMakeRecipeDataDTO {
	grounds: number;
	ratio: number;
	method: string;
	blooming: boolean;
}

export interface IMakeRecipeDTO {
	recipe: IRecipeDTO;
	data: IMakeRecipeDataDTO;
}

export interface IRecipeDTO<StepProps = any, StepName = any> {
	name: string;
	methods: string[];
	pours: number;
	minutes: number;
	blooming: (grounds: number) => number;
	formula: (
		grounds: number,
		ratio: number
	) => Record<keyof StepProps, number | string>;
	steps: string[];
	stepsObject: Record<keyof StepName, IRecipeStepDTO>;
}

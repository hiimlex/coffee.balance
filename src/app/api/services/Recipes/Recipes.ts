import { IRecipeDTO } from "../../models";

const fourthBySixth: IRecipeDTO<
	{
		blooming$: string;
		bloomingX$: number;
		fourthPour$: string;
		sixthPour$: string;
	},
	{
		rinse: string;
		blooming: string;
		timer30: string;
		fourthPour: string;
		sixthPour: string;
	}
> = {
	name: "4:6",
	methods: ["v60"],
	description:
		"4:6 it is a method that allows you to control the taste of coffee by changing the amount of water poured in each pour, the pours are divided in two parts 40% and 60% of the total.",
	recommendedGrindSize: "medium-coarse",
	recommendedRatio: 15,
	pours: 5,
	minutes: 3,
	formula: (grounds, ratio) => {
		const total = grounds * ratio;

		const fourthPour$ = (total * 0.4).toFixed(0);
		const sixthPour$ = (total * 0.6).toFixed(0);
		const bloomingX$ = 2;
		const blooming$ = (grounds * bloomingX$).toFixed(0);

		return {
			blooming$,
			fourthPour$,
			sixthPour$,
			bloomingX$,
		};
	},
	steps: [
		"rinse",
		"blooming",
		"timer30",
		"fourthPour",
		"fourthPour",
		"sixthPour",
		"sixthPour",
		"sixthPour",
	],
	stepsObject: {
		rinse: {
			label: `rinse filter & pre-heat V60`,
		},
		timer30: {
			label: `wait 30s`,
			isTimer: true,
		},
		blooming: {
			label: `pre-wet blooming$g water (~bloomingX$x weight of grounds)`,
		},
		fourthPour: {
			label: `pour fourthPour$g water`,
		},
		sixthPour: {
			label: `pour sixthPour$g water`,
		},
	},
};

const oneShot: IRecipeDTO<
	{
		blooming$: number;
		fullPour$: number;
		bloomingX$: number;
	},
	{
		rinse: string;
		blooming: string;
		timer30: string;
		fullPour: string;
	}
> = {
	name: "continuous",
	methods: ["v60", "melitta"],
	description:
		"pour all water at once, a powerful and hard method to make a simple cup, the taste will be controlled by time and water rotation, the grind size is very important at this method.",
	recommendedGrindSize: "medium-coarse",
	recommendedRatio: 12.5,
	pours: 1,
	minutes: 3,
	formula: (grounds, ratio) => {
		const fullPour$ = (grounds * ratio).toFixed(0);
		const bloomingX$ = 1.5;
		const blooming$ = grounds * bloomingX$;

		return {
			fullPour$,
			blooming$,
			bloomingX$,
		};
	},
	steps: ["rinse", "blooming", "timer30", "fullPour"],
	stepsObject: {
		rinse: {
			label: "rinse filter & pre-heat V60",
		},
		timer30: {
			label: `wait 30s`,
			isTimer: true,
		},
		blooming: {
			label: `pre-wet blooming$g water (~bloomingX$x weight of grounds)`,
		},
		fullPour: {
			label: `pour fullPour$g water`,
		},
	},
};

const fivePour: IRecipeDTO<
	{
		blooming$: number;
		bloomingX$: number;
		fifth$: number;
	},
	{
		rinse: string;
		blooming: string;
		timer30: string;
		fifthPour: string;
	}
> = {
	name: "5 pour",
	methods: ["v60"],
	minutes: 3,
	pours: 5,
	description:
		"usual V60 brewing, this beverage involves pouring water in five batches, instead of pouring just a little bit of water for blooming before dropping in the rest.",
	recommendedGrindSize: "medium-coarse",
	recommendedRatio: 15,
	formula: (grounds, ratio) => {
		const total = grounds * ratio;

		const fifth$ = (total / 5).toFixed(0);

		const bloomingX$ = 3;

		const blooming$ = (grounds * bloomingX$).toFixed(0);

		return {
			bloomingX$,
			fifth$,
			blooming$,
		};
	},
	steps: [
		"rinse",
		"blooming",
		"timer30",
		"fifthPour",
		"fifthPour",
		"fifthPour",
		"fifthPour",
		"fifthPour",
	],
	stepsObject: {
		rinse: {
			label: "rinse filter & pre-heat V60",
		},
		blooming: {
			label: `pre-wet blooming$g water (~bloomingX$x weight of grounds)`,
		},
		fifthPour: {
			label: `pour fifth$g water`,
		},
		timer30: {
			label: `wait 30s`,
			isTimer: true,
		},
	},
};

const all = [fourthBySixth, oneShot, fivePour].sort((a, b) => {
	if (a.name > b.name) return 1;
	if (a.name < b.name) return -1;
	return 0;
});

const allNames = all.map((recipe) => recipe.name);

export { all, allNames, fourthBySixth, oneShot };

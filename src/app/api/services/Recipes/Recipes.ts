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
	tip: "4:6 it is a method that allows you to control the taste of coffee by changing the amount of water poured in each pour, the pours are divided in two parts 40% and 60% of the total.",
	recommendedGrindSize: "medium",
	recommendedRatio: 15,
	pours: 5,
	minutes: 3,
	formula: (grounds, ratio) => {
		const total = grounds * ratio;

		const fourthPour$ = ((total * 0.4) / 2).toFixed(0);
		const sixthPour$ = ((total * 0.6) / 3).toFixed(0);
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
			label: `rinse filter & pre-heat`,
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
	tip: "pour all water at once, a powerful and hard method to make a simple cup, the taste will be controlled by time and water rotation, the grind size is very important at this method.",
	recommendedGrindSize: "medium",
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
			label: "rinse filter & pre-heat",
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
	tip: "usual V60 brewing, this beverage involves pouring water in five batches, instead of pouring just a little bit of water for blooming before dropping in the rest.",
	recommendedGrindSize: "medium",
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
			label: "rinse filter & pre-heat",
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

const melitta: IRecipeDTO<
	{
		blooming$: number;
		bloomingX$: number;
		pour25$: number;
		pour12$: number;
	},
	{
		rinse: string;
		blooming: string;
		timer10: string;
		timer30: string;
		pour25: string;
		pour12: string;
	}
> = {
	name: "melitta",
	methods: ["melitta"],
	minutes: 3.3,
	pours: 1,
	formula: (grounds, ratio) => {
		const total = grounds * ratio;

		const pour25$ = (total * 0.25).toFixed(0);
		const pour12$ = (total * 0.125).toFixed(0);

		const bloomingX$ = 0.125;
		const blooming$ = (total * bloomingX$).toFixed(0);

		return {
			blooming$,
			bloomingX$,
			pour12$,
			pour25$,
		};
	},
	recommendedGrindSize: "medium",
	recommendedRatio: 17,
	tip: "the melitta method is a simple method that involves pouring all the water at once, the grind size is very important at this method.",
	steps: [
		"rinse",
		"blooming",
		"timer30",
		"pour12",
		"timer10",
		"pour25",
		"pour25",
		"pour25",
	],
	stepsObject: {
		rinse: {
			label: "rinse filter & pre-heat",
		},
		blooming: {
			label: `pre-wet blooming$g water (~bloomingX$x of grounds weight)`,
		},
		timer30: {
			label: `wait 30s`,
			isTimer: true,
		},
		timer10: {
			label: `wait 10s`,
			isTimer: true,
		},
		pour25: {
			label: `pour pour25$g water`,
		},
		pour12: {
			label: `pour pour12$g water`,
		},
	},
};

const all = [fourthBySixth, oneShot, fivePour, melitta].sort((a, b) => {
	if (a.name > b.name) return 1;
	if (a.name < b.name) return -1;
	return 0;
});

const allNames = all.map((recipe) => recipe.name);

export { all, allNames, fivePour, fourthBySixth, melitta, oneShot };

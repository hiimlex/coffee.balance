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
	name: "4/6",
	methods: ["v60"],
	pours: 5,
	minutes: 3,
	blooming: (grounds) => grounds * 2,
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
	name: "continuos",
	methods: ["v60", "melita"],
	pours: 1,
	minutes: 3,
	blooming: (grounds) => grounds * 2,
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

const all = [fourthBySixth, oneShot];

const allNames = all.map((recipe) => recipe.name);

export { all, allNames, fourthBySixth, oneShot };

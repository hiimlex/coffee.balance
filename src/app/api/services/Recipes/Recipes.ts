import { IRecipeDTO } from "../../models";

const fourthBySixthRecipe: IRecipeDTO<
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
		sugarPour: string;
		acidPour: string;
		sixthPour: string;
		serve: string;
	}
> = {
	name: "4:6",
	methods: ["v60"],
	tip: "<strong>4:6</strong> it is a method that allows you to control the taste of coffee by changing the amount of water poured in each pour, the pours are divided in two parts 40% and 60% of the total. <br/> <br/><strong>Increase Acidity:</strong> Use more water in the first 40%. For example, if you're using 300g of water in total, use 150g for the first 40% instead of 120g. This emphasizes the extraction of acidic compounds, making the coffee taste brighter and more acidic.<br/><br/> <strong>Decrease Acidity:</strong> Use less water in the first 40%. For example, use 90g instead of 120g for the first 40%. This will reduce the acidity, resulting in a more mellow cup. <br/><br/> <strong>Increase Strength:</strong> Decrease the total water used or increase the coffee amount. For the 4:6 method, focus on the final 60% of the water. Use a finer grind or pour more slowly to extract more compounds, making the coffee taste stronger. <br/><br/> <strong>Decrease Strength:</strong> Increase the total water used or use less coffee. You can also coarsen the grind slightly or pour faster in the final 60% to extract fewer compounds, resulting in a lighter, less intense cup.",
	recommendedGrindSize: "medium",
	recommendedRatio: 15,
	pours: 5,
	minutes: 3,
	formula: (grounds, ratio) => {
		const bloomingX$ = 2;
		const blooming$ = (grounds * bloomingX$).toFixed(0);
		const total = grounds * ratio - +blooming$;

		const sixthPour$ = ((total * 0.6) / 3).toFixed(0);
		const fourthPour$ = (total * 0.4).toFixed(0);
		const sugarPour$ = (+fourthPour$ * 0.65).toFixed(0);
		const acidPour$ = (+fourthPour$ * 0.35).toFixed(0);

		return {
			blooming$,
			fourthPour$,
			sixthPour$,
			bloomingX$,
			sugarPour$,
			acidPour$,
		};
	},
	steps: [
		"rinse",
		"blooming",
		"timer30",
		"acidPour",
		"sugarPour",
		"sixthPour",
		"sixthPour",
		"sixthPour",
		"serve",
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
		sugarPour: {
			label: `pour sugarPour$g water`,
		},
		acidPour: {
			label: `pour acidPour$g water`,
		},
		sixthPour: {
			label: `pour sixthPour$g water`,
		},
		serve: {
			label: "serve the coffee and enjoy!",
		},
	},
};

const continuousRecipe: IRecipeDTO<
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
		serve: string;
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
		const bloomingX$ = 1.5;
		const blooming$ = grounds * bloomingX$;
		const fullPour$ = (grounds * ratio - +blooming$).toFixed(0);

		return {
			fullPour$,
			blooming$,
			bloomingX$,
		};
	},
	steps: ["rinse", "blooming", "timer30", "fullPour", "serve"],
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
		serve: {
			label: "serve the coffee and enjoy!",
		},
	},
};

const fivePourRecipe: IRecipeDTO<
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
		serve: string;
	}
> = {
	name: "5 pour",
	methods: ["v60", "melitta"],
	minutes: 3,
	pours: 5,
	tip: "usual V60 brewing, this beverage involves pouring water in five batches, instead of pouring just a little bit of water for blooming before dropping in the rest.",
	recommendedGrindSize: "medium",
	recommendedRatio: 15,
	formula: (grounds, ratio) => {
		const bloomingX$ = 3;
		const blooming$ = (grounds * bloomingX$).toFixed(0);
		const total = grounds * ratio - +blooming$;

		const fifth$ = (total / 5).toFixed(0);

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
		"serve",
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
		serve: {
			label: "serve the coffee and enjoy!",
		},
	},
};

const melittaRecipe: IRecipeDTO<
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
		serve: string;
	}
> = {
	name: "melitta",
	methods: ["melitta"],
	minutes: 3.3,
	pours: 1,
	formula: (grounds, ratio) => {
		const bloomingX$ = 0.2;
		const blooming$ = (grounds * ratio * bloomingX$).toFixed(0);
		const total = grounds * ratio - +blooming$;

		const pour25$ = (total * 0.25).toFixed(0);
		const pour12$ = (total * 0.125).toFixed(0);

		return {
			blooming$,
			bloomingX$,
			pour12$,
			pour25$,
		};
	},
	recommendedGrindSize: "medium",
	recommendedRatio: 17,
	tip: "Melitta is a pour-over method that uses a cone-shaped filter. It's similar to the V60, but the Melitta filter has a flat bottom, which can lead to a more balanced extraction.",
	steps: [
		"rinse",
		"blooming",
		"timer30",
		"pour12",
		"timer10",
		"pour25",
		"pour25",
		"pour25",
		"serve",
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
		serve: {
			label: "serve the coffee and enjoy!",
		},
	},
};

const frenchPressRecipe: IRecipeDTO<
	{
		pour$: number;
	},
	{
		boil: string;
		rinse: string;
		pour: string;
		stir: string;
		timer5minutes: string;
		scoopFoam: string;
		plunge: string;
		serve: string;
	}
> = {
	name: "french press",
	methods: ["french press"],
	minutes: 10,
	pours: 1,
	formula: (grounds, ratio) => {
		const total = grounds * ratio;
		const pour$ = total;

		return {
			pour$,
		};
	},
	recommendedGrindSize: "coarse",
	recommendedRatio: 16,
	tip: "Pour carefully! You want to avoid stirring up the grounds that have settled at the bottom.",
	steps: [
		"boil",
		"rinse",
		"pour",
		"timer5minutes",
		"stir",
		"scoopFoam",
		"timer5minutes",
		"plunge",
		"serve",
	],
	stepsObject: {
		boil: {
			label: "boil water",
		},
		rinse: {
			label: "rinse french press & pre-heat",
		},
		pour: {
			label: `pour pour$g water into french press`,
		},
		stir: {
			label: `stir coffee`,
		},
		timer5minutes: {
			label: `wait 5 minutes`,
			isTimer: true,
		},
		scoopFoam: {
			label: `scoop foam off the top`,
		},
		plunge: {
			label: `plunge the press until the screen rests on top of the liquid`,
		},
		serve: {
			label: "serve the coffee and enjoy!",
		},
	},
};

const coldBrewImmersionRecipe: IRecipeDTO<
	{
		water$: number;
		coffee$: number;
	},
	{
		grind: string;
		mix: string;
		steep: string;
		strain: string;
		dilute: string;
		serve: string;
	}
> = {
	name: "cold brew",
	methods: ["cold brew", "immersion"],
	minutes: 720, // 12 hours for steeping
	pours: 1,
	formula: (grounds, ratio) => {
		const totalWater = grounds * ratio;
		const coffee$ = grounds;
		const water$ = totalWater;

		return {
			water$,
			coffee$,
		};
	},
	recommendedGrindSize: "coarse",
	recommendedRatio: 5, // For a strong brew, you can start with a 1:5 ratio
	tip: "Adjust the brew time and dilution to taste for your perfect cup of cold brew.",
	steps: ["grind", "mix", "steep", "strain", "dilute", "serve"],
	stepsObject: {
		grind: {
			label: "Grind coffee beans to a coarse consistency.",
		},
		mix: {
			label:
				"mix coffee$g of coffee with water$g of cold or room-temperature water.",
		},
		steep: {
			label: "cover and steep the mixture for 12 to 24 hours.",
			isTimer: true,
		},
		strain: {
			label: "strain the coffee using a fine mesh sieve or a coffee filter.",
		},
		dilute: {
			label: "dilute with water, milk, or ice to taste.",
		},
		serve: {
			label: "serve the cold brew over ice and enjoy.",
		},
	},
};

const harioImmersionDripperSwitchRecipe: IRecipeDTO<
	{
		bloom$: number;
		pour$: number;
	},
	{
		boil: string;
		grind: string;
		bloom: string;
		stir: string;
		pour: string;
		steep: string;
		release: string;
		serve: string;
	}
> = {
	name: "dripper switch",
	methods: ["immersion", "dripper"],
	minutes: 4,
	pours: 2,
	formula: (grounds, ratio) => {
		const bloom$ = total * 0.15;
		const total = grounds * ratio;
		const pour$ = total - bloom$;

		return {
			bloom$,
			pour$,
		};
	},
	recommendedGrindSize: "medium-coarse",
	recommendedRatio: 15, // 1:15 coffee to water ratio
	tip: "Make sure to fully saturate the grounds during the bloom for a balanced extraction.",
	steps: [
		"boil",
		"grind",
		"bloom",
		"stir",
		"pour",
		"steep",
		"release",
		"serve",
	],
	stepsObject: {
		boil: {
			label: "boil water to 93°C (200°F).",
		},
		grind: {
			label: "grind coffee beans to a medium-coarse consistency.",
		},
		bloom: {
			label:
				"add bloom$g of water to the grounds and let it bloom for 30 seconds.",
			isTimer: true,
		},
		stir: {
			label: "stir the bloom gently to ensure all grounds are saturated.",
		},
		pour: {
			label: "slowly pour the remaining pour$g of water over 2 minutes.",
		},
		steep: {
			label: "let the coffee steep for an additional 2 minutes.",
			isTimer: true,
		},
		release: {
			label: "press the switch to release the coffee into the cup.",
		},
		serve: {
			label: "serve the coffee and enjoy.",
		},
	},
};

const v60IcedCoffeeJapaneseStyleRecipe: IRecipeDTO<
	{
		ice$: number;
		hotWater$: number;
	},
	{
		boil: string;
		grind: string;
		addIce: string;
		bloom: string;
		pour: string;
		swirl: string;
		serve: string;
	}
> = {
	name: "iced coffee",
	methods: ["v60", "iced coffee"],
	minutes: 4,
	pours: 1,
	formula: (grounds, ratio) => {
		const totalWater = grounds * ratio;
		const ice$ = +(totalWater * 0.4).toFixed(0); // 40% of the water weight is ice
		const hotWater$ = +(totalWater - ice$).toFixed(0);

		return {
			ice$,
			hotWater$,
		};
	},
	recommendedGrindSize: "coarse",
	recommendedRatio: 16, // 1:16 coffee to water ratio
	tip: "Swirl the dripper to ensure even extraction and proper cooling over the ice.",
	steps: ["boil", "grind", "addIce", "bloom", "pour", "swirl", "serve"],
	stepsObject: {
		boil: {
			label: "boil water to 93°C (200°F).",
		},
		grind: {
			label: "grind coffee beans to a medium consistency.",
		},
		addIce: {
			label: "add ice$g of ice to the carafe or server.",
		},
		bloom: {
			label:
				"add 40g of hot water to the grounds and let it bloom for 30 seconds.",
			isTimer: true,
		},
		pour: {
			label:
				"slowly pour the remaining hotWater$g of hot water over 2 minutes.",
		},
		swirl: {
			label: "swirl the dripper gently to mix the coffee and ice.",
		},
		serve: {
			label: "serve the iced coffee immediately and enjoy.",
		},
	},
};

const brikkaPotRecipe: IRecipeDTO<
	{
		water$: number;
		coffee$: number;
	},
	{
		boil: string;
		grind: string;
		addWater: string;
		addCoffee: string;
		assemble: string;
		heat: string;
		serve: string;
	}
> = {
	name: "brikka Pot",
	methods: ["brikka"],
	minutes: 5,
	pours: 1,
	formula: (grounds, ratio) => {
		const coffee$ = grounds;
		const water$ = grounds * ratio; // Ratio is typically around 1:7 for stovetop espresso

		return {
			water$,
			coffee$,
		};
	},
	recommendedGrindSize: "fine", // Slightly coarser than espresso grind
	recommendedRatio: 7, // 1:7 coffee to water ratio
	tip: "Use freshly boiled water to speed up the brewing process and prevent over-extraction.",
	steps: [
		"boil",
		"grind",
		"addWater",
		"addCoffee",
		"assemble",
		"heat",
		"serve",
	],
	stepsObject: {
		boil: {
			label: "boil water separately to speed up the brewing process.",
		},
		grind: {
			label:
				"grind coffee beans to a fine consistency, slightly coarser than espresso.",
		},
		addWater: {
			label: "add water$g of water to the Brikka pot's water chamber.",
		},
		addCoffee: {
			label:
				"fill the filter basket with coffee$g of coffee, leveled but not tamped.",
		},
		assemble: {
			label: "assemble the Brikka pot and place it on the stove.",
		},
		heat: {
			label:
				"heat on medium until coffee starts to bubble and pour into the top chamber.",
		},
		serve: {
			label:
				"remove from heat when you hear a hissing sound. serve the coffee immediately.",
		},
	},
};

const mokaPotRecipe: IRecipeDTO<
	{
		water$: number;
		coffee$: number;
	},
	{
		boil: string;
		grind: string;
		addWater: string;
		addCoffee: string;
		assemble: string;
		heat: string;
		serve: string;
	}
> = {
	name: "moka Pot",
	methods: ["moka"],
	minutes: 5,
	pours: 1,
	formula: (grounds, ratio) => {
		const coffee$ = grounds;
		const water$ = grounds * ratio; // Ratio is typically around 1:2 for moka pots

		return {
			water$,
			coffee$,
		};
	},
	recommendedGrindSize: "medium-fine", // Similar to table salt
	recommendedRatio: 2, // 1:2 coffee to water ratio
	tip: "Ensure the water level does not reach the safety valve and use medium heat to prevent burning the coffee.",
	steps: [
		"boil",
		"grind",
		"addWater",
		"addCoffee",
		"assemble",
		"heat",
		"serve",
	],
	stepsObject: {
		boil: {
			label:
				"boil water separately if you want to speed up the brewing process.",
		},
		grind: {
			label:
				"grind coffee beans to a medium-fine consistency, similar to table salt.",
		},
		addWater: {
			label:
				"add water$g of water to the bottom chamber of the Moka pot, making sure not to cover the safety valve.",
		},
		addCoffee: {
			label:
				"fill the filter basket with coffee$g of coffee, leveling it off without pressing down.",
		},
		assemble: {
			label:
				"assemble the Moka pot by placing the filter basket into the bottom chamber and screwing on the top part.",
		},
		heat: {
			label:
				"heat the Moka pot on medium heat until coffee begins to bubble and brew into the top chamber.",
		},
		serve: {
			label:
				"remove from heat as soon as brewing slows to avoid burning. serve the coffee immediately.",
		},
	},
};

const all = [
	continuousRecipe,
	fourthBySixthRecipe,
	fivePourRecipe,
	melittaRecipe,
	frenchPressRecipe,
	// coldBrewImmersionRecipe,
	// harioImmersionDripperSwitchRecipe,
	v60IcedCoffeeJapaneseStyleRecipe,
	// brikkaPotRecipe,
	// mokaPotRecipe,
].sort((a, b) => {
	if (a.name > b.name) return 1;
	if (a.name < b.name) return -1;
	return 0;
});

const allNames = all.map((recipe) => recipe.name);

export {
	all,
	allNames,
	continuousRecipe,
	fourthBySixthRecipe,
	fivePourRecipe,
	melittaRecipe,
	frenchPressRecipe,
	coldBrewImmersionRecipe,
	harioImmersionDripperSwitchRecipe,
	v60IcedCoffeeJapaneseStyleRecipe,
	brikkaPotRecipe,
	mokaPotRecipe,
};

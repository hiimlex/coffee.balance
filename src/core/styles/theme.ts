export interface IThemeType {
	colors: {
		background: string;
		brown1: string;
		brown2: string;
		brown3: string;
		brown4: string;
		purple1: string;
		purple2: string;
		black1: string;
		white1: string;
		nude1: string;
		nude2: string;
		disabled: string;
	};
}

const theme: IThemeType = {
	colors: {
		background: "#A4745C",
		brown1: "#cd9f8f",
		brown2: "#A4745C",
		brown3: "#611f09",
		brown4: "#3f2f1e",
		purple1: "#a396d3",
		purple2: "#7c728f",
		black1: "#262226",
		white1: "#fefefe",
		nude1: "#eae1db",
		nude2: "#ad988f",
		disabled: "#6e594e",
	},
};

export default theme;

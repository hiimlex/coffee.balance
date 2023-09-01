import {} from "styled-components";
import { ThemeType } from "./theme"; // Import type from above file
declare module "styled-components" {
	export interface DefaultTheme extends ThemeType {
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
		};
	} // extends the global DefaultTheme with our ThemeType.
}

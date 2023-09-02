import {} from "styled-components";
import { IThemeType } from "../core/styles/theme"; // Import type from above file
declare module "styled-components" {
	export interface DefaultTheme extends IThemeType {} // extends the global DefaultTheme with our ThemeType.
}

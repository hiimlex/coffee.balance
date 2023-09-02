import { ButtonHTMLAttributes, DetailedHTMLProps, RefObject } from "react";
import { StyledButton } from "./styles";

export type IButtonTheme = "primary";

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: IButtonTheme;
	ref?: RefObject<HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = ({
	children,
	variant,
	...buttonProps
}) => {
	return (
		<StyledButton {...buttonProps} variant={variant}>
			{children}
		</StyledButton>
	);
};

export default Button;

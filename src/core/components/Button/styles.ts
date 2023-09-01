import styled from "styled-components";
import { IButtonTheme } from "./Button";

export const StyledButton = styled.button<{ variant?: IButtonTheme }>`
	padding: 10px 12px;
	font-size: 14px;
	font-weight: 600;
	border-radius: 8px;

	box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.1);

	transition: all 0.1s ease-in-out;

	${({ variant, theme }) =>
		variant === "primary" &&
		`background-color: ${theme.colors.purple1};
		color: ${theme.colors.white1};
	`}

	&:hover {
		cursor: pointer;
		opacity: 0.92;
	}
`;

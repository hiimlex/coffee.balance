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

	&:hover, &:active {
		cursor: pointer;
		transform: scale(1.02);
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.black1};
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.disabled};
		color: ${({ theme }) => theme.colors.black1};

		&:hover {
			transform: none;
			cursor: not-allowed;
		}
	}
`;

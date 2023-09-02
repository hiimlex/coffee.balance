import styled from "styled-components";

export const StyledRecipesField = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 4px;
`;

export const StyledRecipesLabel = styled.div`
	font-weight: 400;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.nude1};

	padding-left: 12px;
`;

export const StyledRecipe = styled.div<{ selected?: boolean }>`
	width: fit-content;
	height: fit-content;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 12px;
	border-radius: 8px;

	font-weight: 600;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.black1};
	background: ${({ theme }) => theme.colors.nude1};

	transition: all 0.1s ease-in-out;

	&:hover {
		cursor: pointer;
		background: ${({ theme }) => theme.colors.nude2};
	}

	${({ selected, theme }) =>
		selected &&
		`
	background: ${theme.colors.brown3} !important;
	color: ${theme.colors.white1};
`};
`;

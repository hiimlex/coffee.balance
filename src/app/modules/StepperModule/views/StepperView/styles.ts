import styled, { keyframes } from "styled-components";

export const StyledStepperViewContainer = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 12px;

	min-width: 420px;
	width: 420px;

	@media (max-width: 420px) {
		min-width: 100vw;
		width: 100vw;

		padding: 18px;
	}
`;

export const StyledStepperViewRecipeGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px;

	height: fit-content;
	width: 100%;
`;

export const StyledStepperViewRecipe = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 8px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.brown3};
	color: ${({ theme }) => theme.colors.white1};
`;

export const StyledStepperViewRecipeLabel = styled.span`
	font-size: 12px;
	font-weight: 500;
	text-align: center;
	color: ${({ theme }) => theme.colors.nude1};
`;

export const StyledStepperViewRecipeValue = styled.span`
	font-size: 16px;
	font-weight: 600;
`;

export const StyledStep = styled.div<{ isTimer?: boolean }>`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	font-size: 16px;
	font-weight: 400;

	padding: 12px;
	border-radius: 8px;

	background-color: ${({ theme }) => theme.colors.purple1};
	color: ${({ theme }) => theme.colors.white1};

	${({ isTimer, theme }) =>
		!!isTimer &&
		isTimer &&
		`
		background-color: ${theme.colors.nude1};
		color: ${theme.colors.purple2};
	`}
`;

export const StyledBackLink = styled.span`
	color: ${({ theme }) => theme.colors.nude1};

	.icon {
		stroke: ${({ theme }) => theme.colors.nude1};
	}

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

export const StyledModalContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

export const StyledModalContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.1s ease-in-out;
	background: rgba(3, 3, 3, 0.20);
`;

export const StyledPopIn = keyframes`
	0% {
		transform: scale(0);
	}
	33% {
		transform: scale(0.6);
	}
	66% {
		transform: scale(1.2);
	}
	100% {
		bottom: 0;
		transform: scale(1);
	}
	`;

export const StyledTipModal = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 40vw;
	height: fit-content;
	padding: 16px;
	border-radius: 8px;

	display: flex;
	flex-direction: column;
	z-index: 99;
	background: ${({ theme }) => theme.colors.brown3};
	color: ${({ theme }) => theme.colors.white1};

	animation: ${StyledPopIn} 0.2s linear;

	@media (max-width: 420px) {
		width: 80vw;
	}
`;

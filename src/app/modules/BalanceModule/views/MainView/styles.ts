import styled from "styled-components";

export const StyledMainViewContainer = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	overflow: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 12px;

	min-width: 420px;
	width: 100%;

	@media (max-width: 420px) {
		min-width: 100vw;
		width: 100vw;

		padding: 18px;
	}
`;

export const StyledMainViewForm = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	gap: 16px;
	padding: 8px;
`;

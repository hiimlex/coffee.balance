import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: 'Poppins', sans-serif;
		background: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.nude1};

		display: flex;
		align-items: center;
		justify-content: center;
	}

	input, select, button {
		font-family: 'Poppins', sans-serif;
	}

	* {
		margin: 0;
		border: none;
		box-sizing: border-box;
	}
`;

export default GlobalStyles;

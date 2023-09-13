import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	body {
		margin: 0;
		padding: 18px;
		font-family: 'Poppins', sans-serif;
		background: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.nude1};

		display: flex;
		align-items: center;
		justify-content: center;

		width: 100vw;
    height: 100vh;
    overflow: auto;
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

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
		min-height: 100vh;
		height: 100%;
    overflow: auto;
		overflow-x: hidden;
	}

	input, select, button {
		font-family: 'Poppins', sans-serif;
	}

	/* Hide scrollbar */
	::-webkit-scrollbar {
		display: none;
	}

	* {
		margin: 0;
		border: none;
		box-sizing: border-box;
	}
`;

export default GlobalStyles;

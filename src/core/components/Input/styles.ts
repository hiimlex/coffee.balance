import styled from "styled-components";

export const StyledInput = styled.input`
	appearance: none;
	border: none;
	border-radius: 8px;
	background: ${({ theme }) => theme.colors.nude1};
	color: ${({ theme }) => theme.colors.black1};
	outline: none;
	font-size: 14px;
	height: 40px;
	font-weight: 500;

	padding: 10px 12px;

	&::placeholder,
	&::-webkit-input-placeholder {
		color: ${({ theme }) => theme.colors.black1};
	}
	&:-ms-input-placeholder {
		color: ${({ theme }) => theme.colors.black1};
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.black1};
	}

	/* Chrome, Safari, Edge, Opera */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	&[type="number"] {
		-moz-appearance: textfield;
	}

	&.with-prefix {
		padding-left: 24px;
	}
`;

export const StyledInputSuffix = styled.div`
	position: absolute;
	right: 12px;
	height: 100%;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.purple2};
	font-weight: 700;

	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 899;
`;

export const StyledInputPrefix = styled.div`
	position: absolute;
	left: 12px;
	height: 100%;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.black1};
	font-weight: 500;

	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 899;
`;

export const StyledInputGroup = styled.div`
	display: flex;
	position: relative;

	height: fit-content;
`;

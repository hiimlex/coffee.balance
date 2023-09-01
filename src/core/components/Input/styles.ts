import styled from "styled-components";

export const StyledInput = styled.input`
	border: none;
	border-radius: 8px;
	background: ${({ theme }) => theme.colors.nude1};
	color: ${({ theme }) => theme.colors.black1};
	outline: none;
	font-size: 14px;
	font-weight: 500;

	padding: 10px 12px;

	&::placeholder,
	&::-webkit-input-placeholder {
		color: ${({ theme }) => theme.colors.black1};
	}
	&:-ms-input-placeholder {
		color: ${({ theme }) => theme.colors.black1};
	}
`;

export const StyledInputSuffix = styled.div`
	position: absolute;
	right: 12px;
	height: 100%;
	font-size: 12px;
	color: ${({ theme }) => theme.colors.purple2};
	font-weight: 700;

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

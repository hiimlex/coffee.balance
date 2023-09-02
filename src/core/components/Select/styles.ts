import styled from "styled-components";

export const StyledSelectContainer = styled.div`
	display: flex;
	height: fit-content;

	position: relative;
`;

export const StyledSelect = styled.select`
	border: none;
	border-radius: 8px;
	background: ${({ theme }) => theme.colors.nude1};
	color: ${({ theme }) => theme.colors.black1};
	outline: none;
	font-size: 14px;
	font-weight: 500;
	height: 40px;

	padding: 10px 12px;

	appearance: none;

	&:hover {
		cursor: pointer;
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.colors.black1};
	}
`;

export const StyledSelectChevron = styled.div`
	position: absolute;
	right: 12px;
	height: 100%;

	.icon {
		stroke: ${({ theme }) => theme.colors.purple2};
	}

	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 900;
`;

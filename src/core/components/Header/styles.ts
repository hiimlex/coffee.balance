import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyledHeaderLogo = styled.span`
	font-size: 32px;
	font-weight: 400;
	color: ${({ theme }) => theme.colors.nude1};
`;

export const StyledHeaderLogoBold = styled.span`
	font-size: 32px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.brown3};
`;

export const StyledHeaderBrand = styled.span`
	font-size: 16px;
	font-weight: 400;
`;

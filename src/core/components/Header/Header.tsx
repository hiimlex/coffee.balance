import {
	StyledHeader,
	StyledHeaderBrand,
	StyledHeaderLogo,
	StyledHeaderLogoBold,
} from "./styles";

const Header: React.FC = () => (
	<StyledHeader>
		<StyledHeaderLogo>
			<StyledHeaderLogoBold>Coffee.</StyledHeaderLogoBold>
			balance
		</StyledHeaderLogo>
		<StyledHeaderBrand>make good coffee by yourself</StyledHeaderBrand>
	</StyledHeader>
);

export default Header;

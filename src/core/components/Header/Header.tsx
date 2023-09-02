import {
	StyledHeader,
	StyledHeaderBrand,
	StyledHeaderLogo,
	StyledHeaderLogoBold,
} from "./styles";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => (
	<StyledHeader>
		<StyledHeaderLogo>
			<StyledHeaderLogoBold>Coffee.</StyledHeaderLogoBold>
			balance
		</StyledHeaderLogo>
		<StyledHeaderBrand>make good coffee by yourself</StyledHeaderBrand>
	</StyledHeader>
);

export default Header;

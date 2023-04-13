import { HeaderWrapper, Logo, SearchWrapper, SearchInput } from "./index.style";
import { HSpace } from "../layouts";
import logo from "../../assets/images/logo.svg";

function Header({ handleChange, handleSearch, value }) {
  return (
    <HeaderWrapper>
      <Logo />
      <HSpace length={40} />
      <SearchWrapper>
        <SearchInput value={value} onChange={handleChange} />
        <img src={logo} onClick={handleSearch} />
      </SearchWrapper>
    </HeaderWrapper>
  );
}

export default Header;

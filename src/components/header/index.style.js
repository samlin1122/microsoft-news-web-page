import styled from "styled-components";
import Bing_logo from "../../assets/images/Bing-logo.png";

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -2px 30px -20px black;
  background: #fff;
`;

export const Logo = styled.img.attrs({
  src: Bing_logo,
  alt: "Bing_logo",
})`
  height: 44px;
`;

export const SearchWrapper = styled.div`
  border-radius: 24px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 4px 1px rgb(0 0 0 / 9%);
  border-left: 1px solid transparent;
  border-right: none;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  position: relative;
  img {
    position: absolute;
    right: 1rem;
    top: 6px;
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 500px;
  height: 44px;
  padding: 0 10px 0 19px;
  border: none;
  border-radius: 24px;
  padding-right: 60px;
`;

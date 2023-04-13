import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px 20px;
  box-shadow: 0px -2px 30px -20px black;
  color: #666666;
  background: #fff;
  &:after {
    content: "2021 Mircrosoft";
    position: absolute;
    right: 1rem;
    font-size: 14px;
  }
`;

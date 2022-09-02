import styled from "styled-components";

export const VSpace = styled.div`
  height: ${(props) => props.length}px;
`;

export const HSpace = styled.div`
  width: ${(props) => props.length}px;
`;

export const Link = styled.a`
  font-size: 14px;
  color: #666666;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

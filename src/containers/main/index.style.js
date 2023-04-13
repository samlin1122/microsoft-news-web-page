import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 106px;
  height: calc(100vh - 106px - 44px);
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 30px;
  width: 20%;
  overflow: auto;
  box-shadow: 0px -2px 30px -20px black;
`;
export const NavItem = styled.div`
  display: flex;
  align-items:center;
  gap: 10px;
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ selected }) => (selected ? "black" : "white")}};
    cursor: pointer;
  }
  p {
    font-size: 20px;
    cursor: pointer;
    font-weight: ${({ selected }) => (selected ? "bold" : "normal")}};
  }
  @media (max-width: 950px) {
    p{
      display: none;
    }
  }
`;
export const NewsWrapper = styled.div`
  width: 80%;
  overflowy: auto;
  padding: 25px 30px;
  margin-bottom: 60px;
  text-align: start;
`;
export const NewsTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  &:after {
    content: "由Mircrosoft News 支援";
    position: absolute;
    right: 1rem;
    font-size: 14px;
    font-weight: normal;
    color: #666666;
  }
`;

export const NewsCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  overflow-y: scroll;
  height: calc(100vh - 106px - 44px - 25px - 28px - 30px);
  padding-bottom: 30px;
`;

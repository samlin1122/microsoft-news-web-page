import styled from "styled-components";

export const NewsCard = styled.a`
  position: relative;
  width: 30%;
  max-width: 300px;
  height: 300px;
  border: 1px solid #666;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  text-decoration: unset;
  @media (max-width: 950px) {
    width: 40%;
  }
  &::after {
    content: "${({ description }) => description}";
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    padding: 1rem;
    background-color: rgba(162, 198, 232, 0.5);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    opacity: 0;
    display: flex;
    align-items: center;
    transition: 0.3s;
    overflow: auto;
  }
  &:hover {
    &::after {
      opacity: ${({ description }) => description && 1};
    }
  }
`;

export const NewsCardImg = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  max-height: 150px;
  min-height: 150px;
`;
export const NewsCardContent = styled.div`
  height: auto;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
export const NewsCardInfo = styled.p`
  font-weight: normal;
  font-size: 12px;
  margin-top: auto;
  color: #666666;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`;

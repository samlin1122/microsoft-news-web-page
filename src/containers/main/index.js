import { useEffect, useState } from "react";
import {
  Wrapper,
  NavWrapper,
  NavItem,
  NewsWrapper,
  NewsTitle,
  NewsCardWrapper,
} from "./index.style";
import { VSpace } from "../../components/layouts";
import Card from "../../components/card";
import { useNavigate, useLocation } from "react-router-dom";
import { navList } from "../../constants";
import logo from "../../assets/images/logo.svg";

function Container({ news }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [selected, setSelected] = useState();

  useEffect(() => {
    let keyword = pathname?.replace("/", "");
    let index = navList.findIndex((e) => e.id === keyword);
    if (index >= 0) {
      setSelected(navList[index]);
    }
  }, []);

  const handleNavClick = (item) => {
    console.log(item);
    setSelected(item);
    navigate(`/${item.id}`);
  };

  return (
    <Wrapper>
      <NavWrapper>
        {navList.map((item) => (
          <NavItem
            key={`nav ${item.id}`}
            selected={selected?.id === item.id}
            onClick={() => handleNavClick(item)}
          >
            <img src={logo} />
            <p>{item.title}</p>
          </NavItem>
        ))}
      </NavWrapper>
      <NewsWrapper>
        <NewsTitle>{selected?.title || navList[0].title}</NewsTitle>
        <VSpace length={30} />
        <NewsCardWrapper>
          {news?.map((data, index) => (
            <Card key={`card ${index}`} {...data} />
          ))}
        </NewsCardWrapper>
      </NewsWrapper>
    </Wrapper>
  );
}

export default Container;

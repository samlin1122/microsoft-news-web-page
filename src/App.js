import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "./containers/main";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState();

  useEffect(() => {
    dispatchNews();
  }, []);

  const dispatchNews = (payload) => {
    let url = `https://newsapi.org/v2/top-headlines?country=tw&apiKey=c14ac1132c5b4fabac7ee0bb1818ea79`,
      req = new Request(url);
    if (payload) {
      url += `&search=${payload}`;
    }
    fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        // console.log({ jsonData });
        setNews(jsonData.articles);
      })
      .catch((err) => {
        console.log("錯誤:", err);
      });
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    console.log("handleSearch : ", search);
    dispatchNews(search);
  };

  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        handleSearch={handleSearch}
        value={search}
      />
      <Container news={news} />
      <Footer />
    </div>
  );
}

export default App;

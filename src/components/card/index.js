import {
  NewsCard,
  NewsCardImg,
  NewsCardContent,
  NewsCardInfo,
} from "./index.style";
import moment from "moment";
import Bing_logo from "../../assets/images/Bing-logo.png";

const Card = ({
  author,
  content,
  description,
  publishedAt,
  source,
  title,
  url,
  urlToImage,
}) => {
  return (
    <NewsCard description={description} href={url} target="_blank">
      <NewsCardImg src={urlToImage || Bing_logo} />
      <NewsCardContent>
        <p>{title}</p>
      </NewsCardContent>
      <NewsCardInfo>
        {source?.name || author}。{moment(publishedAt).format("YYYY-MMM-DD")}
      </NewsCardInfo>
    </NewsCard>
  );
};
export default Card;

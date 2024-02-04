import { Box } from "@mui/material";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useBodyContext } from "../BodyContext";
import { addCommasToNumber } from "../../Tools/CommaSeperation";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  interface TrendingCrypto {
    id: number;
    img: string;
    symbol: string;
    name: string;
    price: number;
    price_change_percentage_24h: number;
    image: string;
    current_price: number;
  }

  const trendingCoins = useBodyContext()[0].slice(0, 10);

  const responsive = {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
  };

  const nav = useNavigate();

  const navigate = (data: TrendingCrypto) => {
    nav(`/coin/${data.name}`, { state: { key: data } });
  };

  const items =
    trendingCoins &&
    trendingCoins.map((coin: TrendingCrypto) => {
      const positive = coin.price_change_percentage_24h > 0 ? "+" : "";
      return (
        <div
          key={coin.id}
          onClick={() => navigate(coin)}
          style={{
            color: "white",
            textAlign: "center",
            cursor: "pointer",
          }}>
          <div>
            <img src={coin.image} alt={coin.name} width={"100px"} />
          </div>
          <div>
            {coin.symbol}
            <span
              style={{
                color: `${positive === "+" ? "green" : "red"}`,
              }}>{`  ${positive}${coin.price_change_percentage_24h.toFixed(
              2
            )}%`}</span>
          </div>
          <span>{addCommasToNumber(coin.current_price)}</span>
        </div>
      );
    });

  return (
    <Box display={"flex"} width={"90%"} mt={6} alignItems={"center"}>
      <AliceCarousel
        mouseTracking
        touchTracking={false}
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </Box>
  );
};

export default Carousel;

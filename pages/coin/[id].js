import Layout from "../../components/Layout";
import {
  CoinPage,
  CoinContainer,
  CoinImage,
  CoinName,
  CoinTicker,
  CoinCurrent,
} from "./styles";

const Coin = ({ coin }) => {
  return (
    <Layout>
      <CoinPage>
        <CoinContainer>
          <CoinImage src={coin.image.large} alt={coin.name} />
          <CoinName>{coin.name}</CoinName>
          <CoinTicker>{coin.symbol}</CoinTicker>
          <CoinCurrent>
          {coin.market_data.current_price.brl}
          </CoinCurrent>
        </CoinContainer>
      </CoinPage>
    </Layout>
  );
};

export default Coin;

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();

  return {
      props:{ coin: data,}
   
  };
};

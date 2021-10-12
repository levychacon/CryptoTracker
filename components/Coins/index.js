import React from "react";
import {
  Coin,
  CoinContainer,
  CoinRow,
  CoinDataContainer,
  CoinPrice,
  CoinVolume,
  CoinMarketCap,
  NegativeCoinPriceVariation,
  PositiveCoinPriceVariation,
} from "./styles";
import Link from "next/link";
export const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <CoinContainer>
          <CoinRow>
            <Coin>
              <img src={image} alt={name} className="coin_img" />
              <h1 className="coin_h1">{name}</h1>
              <p className="coin_symbol">{symbol}</p>
            </Coin>

            <CoinDataContainer>
              <CoinPrice>R$ {price}</CoinPrice>
              <CoinVolume>{volume}</CoinVolume>

              {priceChange < 0 ? (
                <NegativeCoinPriceVariation>
                  {priceChange.toFixed(2)}%
                </NegativeCoinPriceVariation>
              ) : (
                <PositiveCoinPriceVariation>
                  {priceChange.toFixed(2)}%
                </PositiveCoinPriceVariation>
              )}

              <CoinMarketCap>
                Mkt Cap: R$ {marketcap.toLocaleString()}
              </CoinMarketCap>
            </CoinDataContainer>
          </CoinRow>
        </CoinContainer>
      </a>
    </Link>
  );
};

export default Coins;

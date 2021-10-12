import styled from "styled-components";

export const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #2e2e2e;
  width: 1000px;
  padding: 0rem 2rem;

  &:hover {
    background: #171718;
  }
`;

export const Coin = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;

  img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }

  h1 {
    font-size: 16px;
    width: 150px;
  }

  p {
    text-transform: uppercase;
  }
`;

export const CoinDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  width: 100%;
`;

export const CoinPrice = styled.p`
  width: 120px;
`;

export const CoinVolume = styled.p`
  width: 155px;
`;

export const CoinMarketCap = styled.p`
  width: 230px;
`;

export const PositiveCoinPriceVariation = styled.p`
  width: 100px;
  color: green;
`;

export const NegativeCoinPriceVariation = styled.p`
  width: 100px;
  color: red;
`;

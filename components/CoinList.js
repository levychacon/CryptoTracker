import Coins from "./Coins"

export const CoinList = ({filteredCoins}) =>{
    return(
        <>
        {filteredCoins.map(coin=>{
            return <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin._volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}

            />
        })}
        </>

    )
    
}

export default CoinList
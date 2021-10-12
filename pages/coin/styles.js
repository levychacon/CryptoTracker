import styled from 'styled-components'


export const CoinPage= styled.div`
    display: flex;
    justify-content: center;
    height: 75vh;
    align-items: center;
`

export const CoinContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #2fffe5;
    border-radius: 10px;
    padding:4rem;
    width: 400px;
`

export const CoinImage = styled.img`
    margin-bottom: 1rem;
`
export const CoinName = styled.h1`
    margin-bottom: 1rem;
    color: #e2e2e2
`

export const CoinTicker = styled.p`
    margin-bottom: 1rem;
    color: #e2e2e2
`

export const CoinCurrent = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #e2e2e2
`
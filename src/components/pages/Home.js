import React, {useState , useEffect} from 'react'
import axios from 'axios'
import "../../App.css";
import Coin from "../cryptocurrency/Coin"



export default function Home() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data)
        }).catch(error => console.log(error))
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }
     const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        
        <div className='coin-app'>
            <div className='coin-search'>
                <h1 className='coin-text'>Search a currency</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
                </form>
            </div>
            <div className="info-bar">
            <table>
            <tr>
                <td id="rank">#</td>
                <td id="coin-name">Coin</td>
                <td></td>
                <td id="coin-price">Price</td>
                <td id="coin-volume">24h volume</td>
                <td id="coin-24h-change">24h</td>
                <td id="coin-marketcap">M. Cap</td>

        </tr>
                </table>
            </div>
            {filteredCoins.map(coin => {
                return (
                    <Coin 
                    key={coin.id} 
                    rank={coin.market_cap_rank}
                    name={coin.name} 
                    image={coin.image}
                    symbol={coin.symbol}
                    volume={coin.total_volume}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    marketCap={coin.market_cap}
                    />
                )
            })}
        </div>
        
    )
}




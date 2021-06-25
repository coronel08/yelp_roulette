import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import {SpinnerRoundOutlined} from 'spinners-react'
import {useRouter} from 'next/router'

export default function Spin(props) {
    // API returns data under businesses from getServerSideProps
    const businesses = props.json.businesses.map(business => business.name);
    const getRandomIndex = (listLength) => Math.floor(Math.random() * listLength)
    const [timer, setTime] = useState(false)
    const [reroll, setReroll] = useState(false)

    // https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/
    setTimeout(() => {setTime(true)}, 2000)

    const reRoll = () => {
        if (reroll) {
            setTime(false)
            setReroll(false)
        } else {
            setTime(false)
            setReroll(true)
        }
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {!timer ?
                    <>
                        <SpinnerRoundOutlined size="300px" color="#e78fb3" />
                        <h2 className={styles.title}>Choosing a Place</h2>
                    </>
                    :
                    <>
                        <h1 className={styles.title}>
                            {businesses[getRandomIndex(businesses.length)]}
                        </h1>
                        <button className={styles.button} onClick={() => reRoll()}>Reroll</button>
                    </>
                }
            </main>
        </div>
    )
}


export async function getServerSideProps({ query }) {
    const API_KEY = "HF3aj20l--aSTBbFhVxM2wk1e8YEYz2i8Y-tv2D3BEc1FRs8kUaOGf15-PsesfiokIFNUGy4Xi701dxR28YfuLq3XzRSOHwBQhHuyHPBFJomuykvdTRBuEmxqw2fYHYx";
    const url = `https://api.yelp.com/v3/businesses/search?term=${query.term}&location=${query.location}`
    const res = await fetch(url, { 
        headers: { 
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        }
    })

    const json = await res.json()
    return {
        props: {
            json,
            query
        }
    }
}
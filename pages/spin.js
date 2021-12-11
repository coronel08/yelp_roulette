import Image from "next/image"
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { SpinnerRoundOutlined } from 'spinners-react'
import { useRouter } from 'next/router'

export default function Spin(props) {
    // API returns data under businesses from getServerSideProps
    const businesses = props.json.businesses.map(business => business.name);
    const urls = props.json.businesses.map(business => business.url)
    const photos = props.json.businesses.map(business => business.image_url)
    const getRandomIndex = (listLength) => Math.floor(Math.random() * listLength)
    const [timer, setTime] = useState(false)
    const [reroll, setReroll] = useState(false)

    function formatImgUrl(imgUrl) {
        return (imgUrl.replace("/o.jpg", "/l.jpg"))
    }

    // https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/
    setTimeout(() => { setTime(true) }, 2000)

    const reRoll = () => {
        if (reroll) {
            setTime(false)
            setReroll(false)
        } else {
            setTime(false)
            setReroll(true)
        }
    }

    const foodIndex = getRandomIndex(businesses.length)

    return (
        <div className={styles.results}>
            {/* <p>Length of list {businesses.length}</p> */}
            {!timer ?
                <>
                    <SpinnerRoundOutlined size="300px" color="#c41200" />
                    <h2 className={styles.resTitle}>Choosing a Place</h2>
                </>
                :
                <>
                    <div className={styles.imgWrapper}>
                        <Image src={formatImgUrl(photos[foodIndex])} alt="" width={500} height={500} className={styles.image} />
                    </div>
                    <a className={styles.resTitle} href={urls[foodIndex]} target="_blank" rel="noreferrer">
                        {businesses[foodIndex]}
                    </a>
                    <button className={styles.button} onClick={() => reRoll()}>Reroll</button>
                </>
            }
        </div>
    )
}


export async function getServerSideProps({ query }) {
    const API_KEY = process.env.API_KEY
    const url = `https://api.yelp.com/v3/businesses/search?term=${query.term}&location=${query.location}&limit=40`
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
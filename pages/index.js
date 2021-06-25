import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useYelpContext } from '../context/state'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const yelpContext = useYelpContext()
  const [buttonError, setButtonError] = useState(false);
  const { updateZipCode, zipCode } = yelpContext
  const router = useRouter()

  const handleClick = (zip) => {
    if (zip !== "") {
      setButtonError(false)
      router.push("/food")
    } else {
      setButtonError(true)
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Yelp Roulette App</title>
        <meta name="description" content="Generated by Yelp Roulette app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Welcome and Input */}
        <h1 className={styles.title}>Yelp Roulette</h1>

        <input className={styles.input} type="text" placeholder="Input Zip Code"
          onChange={e => updateZipCode(e.target.value)} />

        {buttonError ? <p>Enter Zip</p> : null}
        <button className={styles.button} onClick={() => handleClick(zipCode)}>Submit</button>
      </main>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by FDL CRNL {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

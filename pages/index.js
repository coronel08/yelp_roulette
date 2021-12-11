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
    <div>

      {/* Welcome and Input */}
      <h1 className={styles.title}>Yelp Roulette</h1>
      <div className={styles.inputWrapper}>
        <input className={styles.input} type="text" placeholder="Zip Code"
          onChange={e => updateZipCode(e.target.value)} />
        {buttonError ? <p>Enter Zip</p> : null}
        <button className={styles.button} onClick={() => handleClick(zipCode)}>Submit</button>
      </div>

    </div>
  )
}

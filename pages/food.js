import styles from '../styles/Home.module.css';
import { useYelpContext } from "../context/state";
import { useState } from "react";
import { useRouter } from "next/router"

export default function Food() {
    const yelpContext = useYelpContext()
    const { zipcode, place, updatePlace } = yelpContext
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleSelect = (value) => {
        if (value !== "") {
            setError(false)
            router.push(`/spin?term=${place}&location=${zipcode}`)
        } else {
            setError(true)
        }
    }

    return (
        <div className={styles.inputWrapper}>
            <select className={styles.input} onChange={e => updatePlace(e.target.value)}>
                <option value="">Select an Category</option>
                <option value="Drinks">Drinks</option>
                <option value="Coffee">Coffee</option>
                <option value="Burgers">Burgers</option>
            </select>
            {error ? <p>Select Something!!</p> : null}
            <button className={styles.button} onClick={() => handleSelect(place)}>Submit</button>
        </div>
    )
}

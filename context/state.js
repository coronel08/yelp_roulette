import { createContext, useContext, useState } from 'react'

const YelpContext = createContext();

export function AppWrapper({ children }) {
    const [zipcode, setZipcode] = useState("")
    const [place, setPlace] = useState("")

    const updateZipCode = (zipcode) => {
        setZipcode(zipcode)
    }

    const updatePlace = (place) => {
        setPlace(place)
    }

    return (
        <YelpContext.Provider value={{ zipcode, place, updateZipCode, updatePlace }}>
            {children}
        </YelpContext.Provider>
    )
}

export function useYelpContext() {
    return useContext(YelpContext)
}
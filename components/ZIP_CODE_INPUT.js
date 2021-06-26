export default function ZipCodeInput(props) {
    return (
        <div>
            <input type="text" />
        </div>
    )
}


export async function getStaticProps(context) {
    const API_KEY = process.env.API_KEY;
    let url = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972"
    const res = await fetch(url, {
        headers: {
            'Authorization': 'Bearer ${API_KEY}',
            'Content-Type': 'application/json'
        }
    })

    const json = await res.json()

    return {
        props: { json }
    }
}

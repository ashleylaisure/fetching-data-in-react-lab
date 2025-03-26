const BASE_URL = "https://swapi.info/api/starships"

const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json()
        // console.log('Data1', data)
        return data;
    } catch (err) {
        console.log(err);
    }
}

// index()

export {index}
import StarshipCard from "../StarshipCard/StarshipCard.jsx";

const StarshipList = (props) => {

    return (
        <main>
            <h1>Starships</h1>

            <h5>number of results: {props.starshipsData.length}</h5>

            <ul>
                {props.starshipsData.map((ship, index) => (
                    <li key={index}>
                        <StarshipCard ship={ship}/>
                    </li>
                ))}
            </ul>
            
        </main>
    )
}

export default StarshipList;
import './StarshipCard.css'

const StarshipCard = ({ship}) => {

    return (
        <>
            <h4 className="shipName">{ship.name}</h4>

            <div>
                <p>Class: {ship.starship_class}</p>
                <p>Manufacturer: {ship.manufacturer}</p>
                <p>Model: {ship.model}</p>
            </div>
        </>
        

    )
}

export default StarshipCard;
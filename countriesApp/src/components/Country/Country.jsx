import React from 'react'
import './Country.css';

const Country = ({ cardData, setData }) => {
    return (
        // These cards will show the countries list and grid
        <div className='Country' onClick={(e) => setData(cardData)}>
            <div className="card__image">
                <img src={cardData.flag} alt="country image" />
            </div>
            <div className="card__data">
                <h2 className="country__name">{cardData.name}</h2>
                <p className="country__population"><span className='data__heading'>Population: </span>{cardData.population}</p>
                <p className="country__region"><span className='data__heading'>Region: </span>{cardData.region}</p>
                <p className="country__capital"><span className='data__heading'>Capital: </span>{cardData.capital}</p>
            </div>
        </div>
    )
}

export default Country
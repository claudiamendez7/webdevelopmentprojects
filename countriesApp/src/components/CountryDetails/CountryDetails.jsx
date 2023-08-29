import React, { useEffect } from 'react'
import './CountryDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const CountryDetails = ({ countryData, setData }) => {

    useEffect(() => {
        // Scroll the body to the top when it renders for the first time
        document.documentElement.scrollTop = 0; // For modern browsers
        document.body.scrollTop = 0; // For older browsers
    }, []);

    return (
        <div className='CountryDetails'>
            <div className="header">
                <button className='back__btn button__model' onClick={(e) => setData({})}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                    Back
                </button>
            </div>
            <div className="country__data">
                <div className="country__image">
                    <img src={countryData.flag} alt="Country image" />
                </div>
                <div className="country__details">
                    <h1 className='country_name'>{countryData.name}</h1>
                    <div className='panel'>
                        <div className="left__panel">
                            <p><span className="data__name">Native Name: </span>{countryData.nativeName}</p>
                            <p><span className="data__name">Population: </span>{countryData.population}</p>
                            <p><span className="data__name">Region: </span>{countryData.region}</p>
                            <p><span className="data__name">Sub Region: </span>{countryData.subregion}</p>
                            <p><span className="data__name">Capital: </span>{countryData.capital}</p>
                        </div>
                        <div className="right__panel">
                            {/* Checking it these value are undefined then hide them */}
                            {countryData?.topLevelDomain?.length > 0 &&
                                <p><span className="data__name">Top Level Domain: </span>{countryData?.topLevelDomain.join(',')}</p>
                            }
                            {countryData?.currencies?.length > 0 &&
                                <p><span className="data__name">Currencies: </span>{countryData.currencies.map((currency) => currency.name).join(',')}</p>
                            }
                            {countryData?.languages?.length > 0 &&
                                <p><span className="data__name">Languages: </span>{countryData.languages.map((language) => language.name).join(',')}</p>
                            }
                        </div>
                    </div>
                    {
                        countryData?.borders?.length > 0 &&
                        <div className="country__borders">
                            <span className='data__name'>Border Countries: </span>
                            {countryData.borders.map((borderName, index) => <div className='button__model' key={index}>{borderName}</div>)}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(CountryDetails);
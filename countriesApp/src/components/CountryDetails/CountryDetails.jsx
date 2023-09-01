import React, { useEffect } from 'react'
import './CountryDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';


const CountryDetails = ({ countryData, setData }) => {

    useEffect(() => {
        document.documentElement.scrollTop = 0; // Modern browsers
        document.body.scrollTop = 0; // Older browsers
    }, []);

    // console.log(countryData)
    
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
                    <img src={countryData.flags.svg} alt="Country image" />
                </div>
                <div className="country__details">
                    <h1 className='country_name'>{countryData.name.common}</h1>
                    <div className='panel'>
                        <div className="left__panel">
                            <p><span className="data__name">Native Name: </span>{countryData.nativeName}</p>
                            <p><span className="data__name">Population: </span>{countryData.population}</p>
                            <p><span className="data__name">Region: </span>{countryData.region}</p>
                            <p><span className="data__name">Sub Region: </span>{countryData.subregion}</p>
                            <p><span className="data__name">Capital: </span>{countryData?.capital}</p>
                        </div>
                        <div className="right__panel">
                            {/* Checking if countryData.currencies and countryData.languages are arrays */}
                            {countryData?.tld?.length > 0 &&
                                <p><span className="data__name">Top Level Domain: </span>{countryData?.tld.join(',')}</p>
                            }
                            {countryData?.currencies?.length > 0 &&
                                <p><span className="data__name">Currencies: </span>{countryData.currencies.map((currency) => currency.name).join(',')}</p>
                            }
                            {countryData?.languages?.length > 0 &&
                                <p><span className="data__name">Languages: </span>{countryData.languages.map((language) => language.name).join(',')}</p>
                            }
                        </div>
                    </div>
                        {countryData?.borders?.length > 0 &&
                        <div className="country__borders">
                            <p><span className='data__name'>Border Countries: </span></p>
                            {countryData.borders.map((borderName, index) => <div className='button__model' key={index}>{borderName}</div>)}
                        </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default React.memo(CountryDetails);
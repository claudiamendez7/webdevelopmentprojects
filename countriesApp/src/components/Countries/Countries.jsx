import React from 'react'
import './Countries.css';
import Country from '../Country/Country';

const Countries = ({ query, filter, countryData, filterData, setData, loading }) => {
    return (
        <div className='Countries'>
            {/* For misspelling */}
            {loading ? <h1 className='loading'>Loading...</h1> :
                (filter !== 'All' || query.length > 0 ?
                    (filterData?.length > 0 ?
                        filterData?.map((data, index) => 
                        <Country cardData={data} key={index} setData={setData} />) :
                        <h2 className='result__msg'>Countries Not Found.</h2>)
                        : countryData?.map((data, index) => 
                        <Country cardData={data} key={index} setData={setData} />))
            }
        </div>
    )
}

export default Countries;
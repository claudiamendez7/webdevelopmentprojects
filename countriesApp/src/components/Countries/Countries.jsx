import React from 'react'
import './Countries.css';
import Country from '../Country/Country';

const Countries = ({ query, filter, countryData, filterData, setData, loading }) => {
    return (
        <div className='Countries'>
            {/* Checking Condition to show and hide components */}
            {loading ? <h1 className='loading'>Loading...</h1> :
                (filter !== 'All' || query.length > 0 ?
                    (filterData?.length > 0 ?
                        filterData?.map((data, index) => <Country cardData={data} key={index} setData={setData} />) :
                        <h1 className='result__msg'>Countries Not Found.</h1>)
                    : countryData?.map((data, index) => <Country cardData={data} key={index} setData={setData} />))
            }
        </div>
    )
}

export default Countries;
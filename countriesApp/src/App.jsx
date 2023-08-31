import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {

  const [countryData, setCountryData] = useState([]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState({});
  const [isDetailPage, setIsDetailPage] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetching countries data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let data = await fetch('https://restcountries.com/v3.1/all').then(response => response.json());
        setCountryData(data);
        setLoading(false);
      } catch {
        console.log("Error");
      }
    }
    fetchData();
  }, []);


  // Filtering countries data when user search query
  useEffect(() => {
    if (query.length <= 0) {
      return;
    }
    let filterData = countryData.filter((data) => data.name.common.toLowerCase().includes(query.toLowerCase()));
    setFilterData(filterData);
  }, [query]);

  // Filtering data when user choose region or change
  useEffect(() => {
    if (filter == 'All') {
      setFilterData(countryData);
    } else {
      let filterData = countryData.filter((data) => data.region.toLowerCase() === filter.toLowerCase());
      setFilterData(filterData);
    }
    setQuery('');
  }, [filter]);

  // Putting page data based on data 
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setIsDetailPage(true);
    } else {
      setIsDetailPage(false);
    }
  }, [data]);

  return (
    <>
      {/* Showing Components based on conditions */}
      <Navbar />
      {isDetailPage ?
        Object.keys(data)?.length > 0 && <CountryDetails countryData={data} setData={setData} /> :
        <>
          <Header setQuery={setQuery} setFilter={setFilter} />
          <Countries query={query} filter={filter} countryData={countryData} filterData={filterData} setData={setData} loading={loading} />
        </>
      }
    </>
  )
}

export default App
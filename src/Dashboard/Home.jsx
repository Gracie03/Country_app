import React, { useEffect, useState } from 'react'
import { Container, Flag, Headerrow, Innercard, Innercolumn, Innercontainer, Outerwrapper, Sectionwrapper, Topwrapper } from '../Styledcomponent/Mainstyles'
import { FaHistory, FaSearch } from "react-icons/fa";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { saveToLocalStorage, getFromLocalStorage } from '../Store/Utility'
import { useRecoilState, } from 'recoil';
import { countriesAtom, recentlyViewedAtom, selectedContinentAtom, searchQueryAtom } from '../Store/atom';

function Home() {

  const navigate = useNavigate()

  // Recoil states
  const [countries, setCountries] = useRecoilState(countriesAtom);
  const [recentlyViewed, setRecentlyViewed] = useRecoilState(recentlyViewedAtom);
  const [selectedContinent, setSelectedContinent] = useRecoilState(selectedContinentAtom);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);


  //fetch all countries
  const getCountries = async () => {

    const url = `https://restcountries.com/v3.1/all`

    try {
      const res = await axios(url);

      setCountries(res.data);

    } catch (error) {

      console.log(error);

    }

  }

  //call the function everytime the countries changes
  useEffect(() => {
    getCountries()
  }, [setCountries])


  // Add a country to the recently viewed list and navigate to single page
  const addToHistory = (country, flag) => {

    const countryData = { name: country, countryFlag: flag };

    //get previously saved views
    const prevHistory = getFromLocalStorage('recentlyViewed')

    //add new countries and set states
    setRecentlyViewed((prev) => {
      const isAlreadyInHistory = prev.some((item) => item.name === countryData.name);
      if (!isAlreadyInHistory) {
        const updatedHistory = [countryData, ...prevHistory].slice(0, 5); // Limit to 5 items
        saveToLocalStorage('recentlyViewed', updatedHistory);
        return updatedHistory;
      }
      return prev;
    });

    //navigate to page onclick
    navigate(`/${country}`);
  };


  //handle continent selection change
  const handleSelection = (e) => {
    const selectedContinent = e.target.value;
    setSelectedContinent(selectedContinent)

    // Navigate to the continent's page if a valid continent is selected
    if (selectedContinent) {
      navigate(`/continent/${selectedContinent}`);
    }
  };


  //handle letter search
  const handleLetterSearch = (letter) => {
    navigate(`/country/${letter}`)
    setSearchQuery('')
  }

  //all continents object
  const allContinents = [
    { value: 'Asia', name: 'Asia', },
    { value: 'Africa', name: 'Africa', },
    { value: 'Europe', name: 'Europe', },
    { value: 'Oceania', name: 'Oceania', },
    { value: 'North America', name: 'North America', },
    { value: 'South America', name: 'South America', },
  ]


  return (
    <>
      <Sectionwrapper>

        <Outerwrapper>
          <Topwrapper>
            <p>Search for countries,continent...</p>
            <Headerrow>
              <form onSubmit={() => handleLetterSearch(searchQuery)} >
                <input type="text" placeholder='search country' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type='submit'><FaSearch /></button>
              </form>
              <div>
                <select
                  name="continent"
                  id="continent"
                  className="dropdown"
                  value={selectedContinent}
                  onChange={handleSelection}
                >
                  <option value="">Select continent</option>
                  {
                    allContinents.map(({ value, name }, index) => <option key={index} value={value}>{name}</option>)
                  }
                </select>
              </div>
              <div className="history" onClick={() => navigate('/history')}>
                <FaHistory />
                <h3>History</h3>
              </div>
            </Headerrow>
          </Topwrapper>
        </Outerwrapper>

        <Container>
          <Innercontainer>
            {
              countries.map(({ name, flags, capital, continents, population }, index) => (
                <Innercard key={index} onClick={() => addToHistory(name.common, flags)}>
                  <Flag>
                    <img src={flags && flags.svg} alt={`${name?.common}'s flag`} />
                  </Flag>
                  <Innercolumn>
                    <h4>{name.common}</h4>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{continents?.join(', ')}</span></p>
                    <p>Capital: <span>{capital?.join(', ')}</span></p>
                  </Innercolumn>
                </Innercard>
              ))
            }
          </Innercontainer>
        </Container>

      </Sectionwrapper>
    </>
  )
}

export default Home
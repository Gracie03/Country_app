import React, { useEffect } from 'react';
import {
  Backtn,
  Detailscontainer,
  Detailswrapper,
  Imagewrapper,
  Innerdetails,
  Innerrow,
  Leftwrapper,
  Rightwrapper,
} from '../Styledcomponent/Mainstyles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { countryDetailsAtom } from '../Store/atom';
import { FaArrowLeft } from 'react-icons/fa';

function Details() {

  //states and params
  const { name } = useParams();
  const [items, setItems] = useRecoilState(countryDetailsAtom);

  //fetch single country
  const getCountry = async () => {
    const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

    try {
      const res = await axios(url);
      setItems(res.data); // Update Recoil state
    } catch (error) {
      console.error('Error fetching country details:', error);
    }
  };

  // Refetch data when the `name` changes
  useEffect(() => {
    getCountry();
  }, [name]);

  if (!items.length) {
    return <p>Loading country details...</p>;
  }


  return (
    <>
      <Detailswrapper>
        {items.map(
          ({ name, flags, capital, continents, currencies, languages, population, maps }, index) => (
            <Innerdetails key={index}>

              <Leftwrapper>
                <button onClick={() => window.history.back()}><FaArrowLeft /> Back</button>
                <Imagewrapper>
                  <img src={flags?.svg} alt={`${name?.common}'s flag`} />
                </Imagewrapper>
              </Leftwrapper>

              <Rightwrapper>
                <p>Country: <span>{name?.common}</span></p>
                <p>Capital: <span>{capital?.join(', ')}</span></p>
                <p>Region: <span>{continents?.join(', ')}</span></p>
                <Innerrow>
                  <p>Currency: </p>
                  <ul>
                    {currencies &&
                      Object.entries(currencies).map(([code, { name, symbol }]) => (
                        <li key={code}>
                          {code}: {name} ({symbol})
                        </li>
                      ))}
                  </ul>
                </Innerrow>
                <Innerrow>
                  <p>Language: </p>
                  <ul>
                    {languages &&
                      Object.entries(languages).map(([code, language]) => (
                        <li key={code}>
                          {code.toUpperCase()}: {language}
                        </li>
                      ))}
                  </ul>
                </Innerrow>
                <p>Population: <span>{population}</span></p>
                <button>
                  <a href={`${maps.googleMaps}`}>View on Google Maps</a>
                </button>
              </Rightwrapper>
            </Innerdetails>
          )
        )}
      </Detailswrapper>
    </>
  );
}

export default Details;

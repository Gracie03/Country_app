import React, { useEffect } from 'react';
import {
  Container,
  Flag,
  Innercard,
  Innercolumn,
  Innercontainer,
  Searchtitle,
  Searchwrapper,
} from '../Styledcomponent/Mainstyles';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { continentSearchAtom } from '../Store/atom';


function Searchbycontinent() {

  const { continentid } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useRecoilState(continentSearchAtom);

  //search continents based on the params:continentid
  const getContinent = async () => {
    const url = `https://restcountries.com/v3.1/region/${continentid}`;

    try {
      const res = await axios(url);
      setItems(res.data); // Update Recoil state
    } catch (error) {
      console.error('Error fetching continent data:', error);
    }
  };

  // Refetch when `continentid` changes
  useEffect(() => {
    getContinent();
  }, [continentid]);


  // check for empty search 
  if (!items.length) {
    return <p>Loading continent results...</p>;
  }

  return (
    <Searchwrapper>

      <Searchtitle>
        <h4>Showing continent results for: <span>{continentid}</span></h4>
      </Searchtitle>

      <Container>
        <Innercontainer>
          {
            items.map(({ name, flags, capital, continents, population }, index) => (
              <Innercard key={index} onClick={() => navigate(`/${name.common}`)}>
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

    </Searchwrapper>
  );
}

export default Searchbycontinent;

import React, { useEffect } from 'react';
import { Container, Flag, Innercard, Innercolumn, Innercontainer, Searchtitle, Searchwrapper } from '../Styledcomponent/Mainstyles';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { countriesAtom } from '../Store/atom';

function Searchbyletter() {
  const { countryid } = useParams();
  const navigate = useNavigate();

  // Use Recoil state for managing fetched countries
  const [items, setItems] = useRecoilState(countriesAtom);


  //fetch countries
  const getByCountries = async () => {
    const url = `https://restcountries.com/v3.1/name/${countryid}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setItems(data); // Update Recoil state
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch data when `countryid` changes
  useEffect(() => {
    getByCountries();
  }, [countryid]);

  return (
    <Searchwrapper>
      <Searchtitle>
        <h4>
          Showing country search for: <span>{countryid}</span>
        </h4>
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

export default Searchbyletter;

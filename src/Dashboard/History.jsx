import React, { useEffect, useState } from 'react'
import { Historycontainer, Historyflag, Historyinner, Historytitle, Historywrapper, Innercard, Innercontainer } from '../Styledcomponent/Mainstyles'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { recentlyViewedAtom } from '../Store/atom';

function History() {

  const navigate = useNavigate()

  //get the recent views from state/local storage
  const historyArray = useRecoilValue(recentlyViewedAtom);
  
  return (
    <>
      <Historywrapper>

        <Historytitle>Your recent searches :</Historytitle>

        <Historycontainer>
          {
            historyArray.map(({ name, countryFlag }, index) => (
              <Historyinner key={index} onClick={() => navigate(`/${name}`)}>
                <Historyflag>
                  <img src={countryFlag && countryFlag.svg} alt={`${name}'s flag`} />
                </Historyflag>
                <p>{name}</p>
              </Historyinner>
            ))

          }
        </Historycontainer>

      </Historywrapper>
    </>
  )
}

export default History
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './error'
import Home from './Dashboard/Home'
import Sharedoutlet from './Dashboard/Sharedoutlet'
import Details from './Dashboard/Details'
import Searchbyletter from './Searchfolder/Searchbyletter'
import Searchbycontinent from './Searchfolder/Searchbycontinent'
import History from './Dashboard/History'

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>

          {/*page */}
          <Route path="/" element={<Sharedoutlet />}>
            <Route index element={<Home />} />

            {/* details page */}
            <Route path="history" element={<History />} />

            {/* details page */}
            <Route path=":name" element={<Details />} />

            {/* country search page */}
            <Route path="/country/:countryid" element={<Searchbyletter />} />

            {/* continent serach page */}
            <Route path="/continent/:continentid" element={<Searchbycontinent />} />
          </Route>

          {/* 404 page */}
          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter >
    </>
  )

}

export default App

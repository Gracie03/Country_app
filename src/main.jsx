import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Apptheme from './Styledcomponent/Theme.jsx'
import { ThemeProvider } from 'styled-components'
import Globalstyles from './Styledcomponent/Globalstyles.jsx'
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Apptheme}>
      <Globalstyles />
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </StrictMode>,
)

import { useState } from "react"
// import CoinTable from "./Components/CoinTable/cointable"
// import Navbar from "./Components/Navbar/Navbar"
// import {Bannerimage} from "./Components/Bannerimage/Bannerimage"
// import { QueryClient, QueryClientProvider } from "react-query"
import { Haome } from "./pages/Haome"
import { Currencycontext } from "./Context/currencyContext"


function App() {
  let [currency , setcurrency] = useState('usd')
  // let [showallah , setallah] = useState(false)
  return <Currencycontext.Provider value={{currency,setcurrency}}>
  {/* return <Currencycontext.Provider value={{currency,setcurrency}}> */}
    <Haome />
  </Currencycontext.Provider>
}

export default App

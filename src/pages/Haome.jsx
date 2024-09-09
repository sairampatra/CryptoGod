import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "../Components/Navbar/Navbar";
import Cointable from "../Components/CoinTable/CoinTable.jsx";
import { Bannetimage } from "../Components/Bannerimage/Bannerimage"
import { useContext, useState } from "react";
import { Currencycontext } from "../Context/currencyContext";
import { store } from "../state/store";
export function Haome() {
    const queryClient = new QueryClient()

   

// let {currency} =useContext(Currencycontext)
// console.log(bando)
const currency = store((state) => state.currency)
    return <>
    <QueryClientProvider client={queryClient}>
{currency} 
 <Navbar />

  <Bannetimage/>
  <Cointable  />
  </QueryClientProvider>
 
    
  </> 
}
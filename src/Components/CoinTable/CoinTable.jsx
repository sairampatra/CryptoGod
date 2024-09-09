import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchCoinData } from "../../services/fetchCoinData";
import { Currencycontext } from "../../Context/currencyContext"; 
import { store } from "../../state/store";
function Cointable() {
  let {currency}=store()
  // let {currency}= useContext(Currencycontext)
  let [page, setPage] = useState(1);
  let { data, error, isError, isLoading, isFetching } = useQuery(
    ["coins", currency],
    () => fetchCoinData(page, currency ),
    { 
      retry: 2,
      retryDelay: 2000,
      cacheTime: 1000 * 60 * 2,
    }
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error:{error.message}</h1>;

 

  return (
    // <>
    //   <button onClick={()=>{
    //     setPage(page+1)
    //   }}>btn</button>
    //   {/* <div>{apidata}</div> */}
    // </>
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
      <div
        className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center
justify-center"
      >
        <div className="basis-[35%]">coin</div>
        <div className="basis-[25%]">price</div>
        <div className="basis-[20%]">24 hr change</div>
        <div className="basis-[20%]">Market cap</div>
      </div>

      <div className="flex-col w-[88vw] mx-auto  ">
        {data.map((coin) => {
          {isLoading && <div>loding... </div>}
          return (
            <div
              key={coin.id}
              className="w-full bg-transparent text-white flex py-4 px-2 font-
            semibold items-center justify-between "
            >
              <div className="flex items-center justify-start gap-3 basis-[35%]  ">
                <div className="w-[rem] h-[5rem]  ">
                  <img src={coin.image} className="w-full h-full" />
                </div>
                <div className="flex flex-col  ">
                  <div className="text-3xl"> {coin.name}</div>
                  <div className="text-xl">{coin.symbol}</div>
                </div>
                
              </div>
              <div className="basis-[25%]"> 
                  {coin.high_24h}
                </div>
                <div className="basis-[25%]"> 
                  {coin.high_24h}
                </div>
                <div className="basis-[25%]"> 
                  {coin.high_24h}
                </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button 
        disabled={page===1}
        onClick={()=>{setPage(page-1)}}
        className="btn btn-primary btn-wide text-white text-2xl">prev </button>
        <button
         onClick={()=>{setPage(page+1)}}
        className="btn btn-primary btn-wide text-white text-2xl">next</button>
      </div>
    </div>
  );
}

export default Cointable;

// const fetchData = async () => {
//   const { data } = await axios.get('https://sonplaceholder.typicode.com/posts'); // Replace '/data' with your endpoint
//   return data;
// };

// const { data, error, isLoading, isError } = useQuery('bando', fetchData, {
//   retry: 3
// });

// if (isLoading) return <p>Loading...</p>;
// if (isError) return <p>An error occurred: {error.message}</p>;

// return (
//   <div>
//     <h1>Data from API:</h1>
//    {
//     data?.map((item , i) => {
//       return <h1 key={i}>{item?.body}</h1>
//     })
//    }
//   </div>
// );

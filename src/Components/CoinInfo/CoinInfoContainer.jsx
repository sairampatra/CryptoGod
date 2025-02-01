import { useQuery } from "react-query";
import CoinInfo from "./Coininfo";
import { FetchCoinHystoricData } from "../../services/FetchCoinHystoricData";
import { store } from "../../state/store";
import { useState } from "react";
import ContentLoader from "react-content-loader";
import Alert from "../Alert/Alert";

export function CoinInfoContainer({ coinId }) {
  let { currency } = store();
  // console.log(currency)
  const [days, setdays] = useState(7);
  const [interval, setcoininterval] = useState("");

  let {
    data: historicdata,
    isError,
    isLoading,
  } = useQuery(
    ["coinHistoricData", coinId, currency, days],
    () => {
      return FetchCoinHystoricData(coinId, days, currency, interval);
    },

    {
      staleTime: 1000 * 60 * 2,
      cacheTime: 1000 * 60 * 2,
    }
    // d  
  );
  if (isLoading) {
    return <ContentLoader />;
  }
  if (isError) {
    return <Alert message="errorfetching the data" type="error" />;
  }
  return (
    <>
      <CoinInfo
        historicdata={historicdata}
        setdays={setdays}
        setcoininterval={setcoininterval}
        days={days}
        currency={currency}
        // setdays = {setdays}
      />
    </>
  );
}

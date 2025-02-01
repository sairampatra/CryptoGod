import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../services/FetchCoinDetails";
import parse from "html-react-parser";
import { store } from "../state/store";
import ContentLoader from "react-content-loader";
import { CoinInfoContainer } from "../Components/CoinInfo/CoininfoCoitainer";

function CoinDetailsPage() {
  let { coinId } = useParams();
  const { currency } = store();
  // let { currency } = store();
  // console.log(currency);
  let {
    data: coin,
    isError,
    error,
    isFetching,
    isLoading,
  } = useQuery(
    ["coin", coinId],
    () => {
      return fetchCoinDetails(coinId);
    },

    {
      retry: 2,
      retryDelay: 2000,
      cacheTime: 1000 * 60 * 2,
    }
  );

  console.log(coin);
  if (isLoading) return <ContentLoader />;
  if (isError) return <h1>Error:something went wrong</h1>;

  return (
    <div className="flex flex-col md:flex-row  ">
      <div
        className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2
border-gray-500"
      >
        <img src={coin?.image?.large} alt={coin?.name} />
        <h1 className="text-4xl font-bold mb-5">{coin?.name}</h1>
        <p className="u-full px-6 py-4">{parse(coin?.description?.en)}</p>
        <div className="w-full flex flex-col md:flex-row md:justify-around">
          <div className="flex items-center mb-4 md:mb-0>>>>>>>>>>>>>>>>>>>>>>>">
            <h2 className="text-xl font-bold">Rank</h2>
            <span className="ml-3 text-xl">{coin?.market_cap_rank}</span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl text-yellow-400 font-bold">CurrentPrice</h2>
            <span className="ml-3 text-xl">
              {coin?.market_data.current_price[currency]}
            </span>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 w-full p-6">
      <CoinInfoContainer coinId={coinId}/>
      </div>
    </div>
  );
}
export default CoinDetailsPage;

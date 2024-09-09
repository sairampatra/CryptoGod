import axiosinstance  from "../helpers/axiosinstance";
export async function fetchCoinData(page = 1,currency = 'usd') {
    let perpage = 10
    try {
            let response =await axiosinstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page-${perpage}&page-${page}`);
            console.log(response)
            return response.data
    } catch (error) {
        console.log(error)
        return null;
    }
} 





















// 8==D
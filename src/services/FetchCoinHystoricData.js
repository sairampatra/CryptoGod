import axiosinstance  from "../helpers/axiosinstance";
export async function FetchCoinHystoricData(id,days=7,currency='usd',interval) {
    try {
            let response =await axiosinstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
            console.log(response.data)

            return response.data;
    } catch (error) {
        console.log(error)
        return null;
    }
} 


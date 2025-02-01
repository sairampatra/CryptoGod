import axiosinstance  from "../helpers/axiosinstance";
export async function fetchCoinDetails(id) {
    try {
            let response =await axiosinstance.get(`/coins/${id}`);
            // console.log(response.data)

            return response.data;
    } catch (error) {
        console.log(error)
        return null;
    }
} 


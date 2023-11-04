import axios from "axios";
import {API_URL} from "../../src/constant"

//This function is more generic and is designed to retrieve data for a specific cryptocurrency based on its id.
//  It fetches detailed data for a single cryptocurrency from the API.
export const getCoinData = (id) => {
  const coinData = axios
    .get(`${API_URL}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

     //without these lines the func will return 'undefined' when there are no error
  if (coinData) return coinData;
  else return;
};

import axios from "axios";
import {API_URL} from "../../src/constant"
export const get100Coins = () => {
  const coins = axios
    .get(
      `${API_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    )
    .then((response) => {
      if (response.status == 200) {
        return response.data;
      }
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });

    //without these lines the func will return 'undefined' when there are no error
  if (coins) return coins;
  else return;
};

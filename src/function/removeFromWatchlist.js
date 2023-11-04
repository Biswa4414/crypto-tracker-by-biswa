import { toast } from "react-toastify";

export const removeFromWatchlist = (id) => {
  if (window.confirm("Are you sure to remove this coin")) {
    let items = localStorage.getItem("watchlist");
    let arr = JSON.parse(items);
    localStorage.setItem(
      "watchlist",
      JSON.stringify(arr.filter((item) => item != id))
    );
    toast.success(
      `${
        id.slice(0, 1).toUpperCase() + id.slice(1)
      } removed from the watchlist!`
    );
  } else {
    toast.error("Couldnt remove the coin from the watchlist!");
  }
};


//watchlist : "["bitcoin","etherum","litecoin","ripple"]"
//arr = ["bitcoin","etherum","litecoin","ripple"];

//item!=id remove litecoin

//filteredArr = ["bitcoin","etherum","ripple"];
//filteredStr = '["bitcoin","etherum","ripple"]'

//watchlist := '["bitcoin","etherum","ripple"]'
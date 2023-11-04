//The addToWatchlist function is designed to add an item (represented by an id)
// to the user's watchlist stored in the browser's local storage

import { toast } from "react-toastify";
export const addToWatchlist = (id) => {
  let items = localStorage.getItem("watchlist"); //The function attempts to retrieve the current watchlist data from the browser's local storage. If the data exists, it's stored in the items variable.
  if (items) {                                   //If items exist
    let arr = JSON.parse(items);                 //convert it to array
    if (!arr.includes(id)) {                     //if the id you want to add to the watchlist is not already present in the arr array
      arr.push(id);                              // Then push it
      localStorage.setItem("watchlist", JSON.stringify(arr));   //arr array back to a JSON string using JSON.stringify and stores it under the key "watchlist."
    }
  } else {                                       //If items not present in local storage
    var arr = JSON.stringify([id]);             
    localStorage.setItem("watchlist", arr);     // add to watchlist
  }
  toast.success(                   
    `${id.slice(0, 1).toUpperCase() + id.slice(1)} - Added To The Watchlist!`
  );
};

//id = bitcoin
// id.slice(0, 1) = 'b'
//id.slice(0, 1).toUpperCase() = 'B
//id.slice(0, 1).toUpperCase()+id.slice(1) = 'B'+itcoin 
//hasBeenAdded function checks whether an item with a specific id has been added to the watchlist.
//If the item is found in the watchlist, it returns true otherwise, it returns false. 
//This can be useful for determining whether to display an "Add to Watchlist" 
//Or "Remove from Watchlist" button or icon based on the current state of the watchlist.

export const hasBeenAdded = (id) => {
    const watchlist = localStorage.getItem("watchlist");
    if (watchlist) {
      let arr = JSON.parse(watchlist);
      if (arr.includes(id)) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };
  
import React, { useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import {addToWatchlist} from "../../../function/addToWatchlist";
import {hasBeenAdded} from "../../../function/hasBeenAdded";
import { removeFromWatchlist } from "../../../function/removeFromWatchlist";


function Grid({ coin, delay, isWatchlistPage }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id)); //check added or not by calling hasBeenAdded func

  return (

    //Used dynamic routing with help of <a> tag.Dynamic rendering helps to 
    //display different content for different data items without having to define individual routes for each item. 

    <a href={`/coin/${coin.id}`}> 
      <motion.div                                                      // in motion we give 3 value intial,whileInview & transition
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red" // This suggests that the component might be hidden when it's a watchlist page, and the coin hasn't been added to the watchlist.
        }`}                                                           // If price is negative colour change to red
        style={{ display: isWatchlistPage && !added && "none" }}     // If isWatchlistPage is true and added is false, the display is set to "none". This suggests that the
       //                                                          //component might be hidden when it's a watchlist page, and the coin hasn't been added to the watchlist.
      >

        <div className="info-flex">
          <div className="coin-info-flex">
            <img src={coin.image} className="coin-image" />
            <div className="coin-name-flex">
              <h3 className="coin-symbol">{coin.symbol}</h3>
              <p className="coin-name">{coin.name}</p>
            </div>
          </div>

          {/* The code checks the value of the added state. If added is true, it means the cryptocurrency is already 
          in the watchlist, and the code removes it from the watchlist and updates the state to false.
           If added is false, the code adds the cryptocurrency to the watchlist and updates the state to true. */}

          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className="coin-info-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingUpRoundedIcon className="trending-icon" />
          </div>
        ) : (
          <div className="coin-info-flex">
            <div className="price-chip red">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingDownRoundedIcon className="trending-icon red" />
          </div>
        )}
         {/* The toLocaleString() method is used to format the number as a string with locale-specific
         // formatting, including adding thousands separators (e.g., commas). */}
        <p
          className={`coin-price ${
            coin.price_change_percentage_24h < 0 && "coin-price-red"
          }`}
        >
          ${coin.current_price.toLocaleString()}
        </p>
        <p className="coin-name-2">
          Total Volume:
          <span className="coin-total_volume">
            {" "}
            {coin.total_volume.toLocaleString()}
          </span>
        </p>
        <p className="coin-name-2">
          Market Cap:
          <span className="coin-total_volume">
            {" "}
            ${coin.market_cap.toLocaleString()}
          </span>
        </p>
      </motion.div>
    </a>
  );
}

export default Grid;

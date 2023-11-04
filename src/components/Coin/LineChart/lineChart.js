// Documentation => Chart.js/sample

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumbers } from "../../../function/convertNumbers";
function LineChart({ chartData, priceType, multiAxis }) {
  const options = {                   //The options object is used to configure the chart's appearance and behavior. It includes settings related to the chart's legend, responsiveness, interaction, and scales (y-axes).
    plugins: {                        //The plugins property specifies the legend configuration
      legend: {                      //if multiaxis then legend(colour box above lineChart) will shown
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {                  //The interaction property configures how interactions with the chart work. It sets the mode to "index," allowing users to see data for all datasets at the same index.
      mode: "index",
      intersect: false,
    },
    scales: {                     //The scales property defines the y-axes configuration. There are two y-axes: y and y2.
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumbers(value);
            } else if (priceType == "market_caps") {
              return "$" + convertNumbers(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },
      y2: multiAxis && {
        type: "linear",
        display: true,
        position: "right",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumbers(value);
            } else if (priceType == "market_caps") {
              return "$" + convertNumbers(value);
            } else {
              return "$" + value.toLocaleString();
            }
          },
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;

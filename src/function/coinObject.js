export const coinObject = (setState, data) => {
    setState({
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      image: data.image.large,
      desc: data.description.en, // description in english
      price_change_percentage_24h: data.market_data.price_change_percentage_24h, // price chng % in last 24hr
      total_volume: data.market_data.total_volume.usd,
      current_price: data.market_data.current_price.usd,
      market_cap: data.market_data.market_cap.usd,
    });
  };
  
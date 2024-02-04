export const CoinlistEndPoint = () =>
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=false";
export const CoinInfoById = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;
export const HystoryEndPoint = (id, days) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

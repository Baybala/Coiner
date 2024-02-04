export function addPlusAndColor(priceChange) {
  return priceChange > 0
    ? { sign: "+", color: "yellow" }
    : { sign: "", color: "red" };
}

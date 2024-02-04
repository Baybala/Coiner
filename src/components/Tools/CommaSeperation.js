export function addCommasToNumber(numberString) {
    return numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
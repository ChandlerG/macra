
const catApiUrl = "https://api.thecatapi.com/v1/images/search?format=json";

export const catCall = async () => {
  return fetch(catApiUrl);
 }

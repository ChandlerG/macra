
const catApiUrl = "https://api.thecatapi.com/v1/images/search?format=json";

export const catCall = async () => {
  const res = await fetch(catApiUrl);
  const resText = await res.json();
  const url = await resText[0].url; 
  console.log('lmfao');
  return url;
 }


const catApiUrl = "https://api.thecatapi.com/v1/images/search?format=json";

export interface CatAPIResponse {
    id: string
    url: string
    breeds: string[]
    categories: string[]
}

export const catCall = async () => {
  const response = await fetch(catApiUrl);
  return await response.json() as CatAPIResponse[];
};

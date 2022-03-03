const GIPHY_API_KEY = "PE24ajuCVtA2Gvm82Al1jMoJe6F3JgW6";

function searchTerms(terms: string[]) {
  return terms.reduce((concated, term) => {
    return `${concated}-${term}`;
  }, "");
}

async function fetchRandom(terms: string[]) {
  return window
    .fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchTerms(
        terms
      )}&rating=pg13`
    )
    .then((response) =>
      response.ok ? response.json() : Promise.reject(response)
    );
}

export { fetchRandom };

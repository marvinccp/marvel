// const getApiInfo = async () =>{

//     const url =
//       "https://gateway.marvel.com:443/v1/public/comics?orderBy=focDate&limit=100&ts=1&apikey=16468c266d75d6c79784fc9cba0a8010&hash=332a08f75c9bf30f393e892351c791f7";
//     const data = await fetch(url)
//     const marvelCharacters = await data.json()
//     console.log(marvelCharacters);
// }
// export {getApiInfo}

const getApiInfo = async () =>{
  
    const url =
      "https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=16468c266d75d6c79784fc9cba0a8010&hash=332a08f75c9bf30f393e892351c791f7";
    const response = await fetch(url)
    const data = await response.json()
    const marvelCharacters = data.data.results
    return marvelCharacters;
}

export { getApiInfo }
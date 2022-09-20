export const getItunesApi = (term, mediaType) => {

    let urlAll = `https://itunes.apple.com/search?term=${term}`;
    const urlMediaType = `https://itunes.apple.com/search?term=${term}&entity=${mediaType}`;

    if (mediaType === "all") { 
        fetch(urlAll).then((res) => {
            return res.json();
        }) 
    } else {
        fetch(urlMediaType).then((res) => {
            return res.json();
        })
    }
}
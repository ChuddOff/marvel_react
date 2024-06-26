 

class MarvelServices {
    getRandomNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)) + min;
    }

    getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(url, res.status);
        }
        return await res.json();
    }
    getAllCharacters = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=9&offset=${this.getRandomNumber(210, 1210)}&apikey=8a0850af6bfba3059c94452f4d6cfeea`)
    }
    getCharacter = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters?orderBy=-modified&limit=1&offset=${this.getRandomNumber(210, 1210)}&apikey=8a0850af6bfba3059c94452f4d6cfeea`)
    }
    getAllComics = () => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/comics?orderBy=-modified&limit=8&offset=${this.getRandomNumber(210, 1210)}&apikey=8a0850af6bfba3059c94452f4d6cfeea`)
    }
    getComicsDetails = (id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=8a0850af6bfba3059c94452f4d6cfeea`)
    }
}

export default MarvelServices;
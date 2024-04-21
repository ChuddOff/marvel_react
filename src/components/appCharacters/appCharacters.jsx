import { useState, useEffect  } from 'react';
import MarvelServices from '../../services/marvelServices';
import Item from '../charactersItem/charactersItem';
import Detail from '../characterDetail/characterDetail';

import './appCharacters.css'

const Characters = () => {
    const marvelServices = new MarvelServices();

    const [characters, setCharacters] = useState([])
    const [characterAbout, setCharacterAbout] = useState(null)


    const generateCharacters = () => {
        marvelServices.getAllCharacters().then(res => {
            setCharacters([...characters, ...res.data.results])
        })
    }
    useEffect(() => {
        generateCharacters();
    }, [])

    console.log(characters);

    if (!characters) {
        return null;
    }

    const characterList = characters.map((character, id) => {
        
        return (
            <Item
            name={character.name}
            url={character.thumbnail.path +'.'+ character.thumbnail.extension}
            id = {id}
            key = {id}
            setCharacterAbout = {(id) => setCharacterAbout(characters[id])} />
        )
    })

    return (
        <main className='main'>
            <div className='charactersItems'>
                {characterList}
                <button 
                className='buttonRed'
                onClick={() => {generateCharacters()}} 
                >LOAD MORE</button>
            </div>
            
            <Detail
            characterAbout = {characterAbout} />
        </main>
    )
}

export default Characters;
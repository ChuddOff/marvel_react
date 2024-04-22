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


    const characterList = characters.map((character, id) => {
        
        return (
            <Item
            character = {character}
            id = {id}
            key = {id}
            setCharacterAbout = {(id) => setCharacterAbout(characters[id])} />
        )
    })
    return (
        <main className='main'>
            <div className='charactersItems'>
                {characters.length !== 0 ? characterList : <View/>}
                <button 
                className='buttonRed'
                onClick={generateCharacters} 
                >LOAD MORE</button>
            </div>
            
            <Detail
            characterAbout = {characterAbout} />
        </main>
    )
}

const View = () => {

    const ar = [];

    for (let i = 0; i < 9; i++) {
        ar.push(
            <div className='item placeholder-glow' key={i}>
                <img className='placeholder' src='image_not_available.jpg' alt="" />
                <h3 className='placeholder col-11'>Hobgo</h3>
            </div>
        )
    }

    return (
        <>
            {ar}
        </>
    )
    
}

export default Characters;
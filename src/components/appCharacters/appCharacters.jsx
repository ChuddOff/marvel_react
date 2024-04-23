import { useState, useEffect  } from 'react';
import MarvelServices from '../../services/marvelServices';
import Item from '../charactersItem/charactersItem';
import Detail from '../characterDetail/characterDetail';

import './appCharacters.css'

const Characters = () => {
    const marvelServices = new MarvelServices();

    const [characters, setCharacters] = useState([]);
    const [characterAbout, setCharacterAbout] = useState(null);
    const [loadingTimes, setLoadingTimes] = useState();
    const [loadedToggle, setLoadedToggle] = useState();


    const generateCharacters = () => {
        marvelServices.getAllCharacters().then(res => {
            setCharacters([...characters, ...res.data.results])
        })
    }
    useEffect(() => {
        generateCharacters();
        setLoadingTimes(9);
        setLoadedToggle(false)
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
                {characters.length == loadingTimes ? characterList : <View loadingTimes = {loadingTimes}/>}
                {characters.length == loadingTimes && loadedToggle == false ? setLoadedToggle(true) : null}
                <button 
                className='buttonRed'
                onClick={() => {
                    if (loadedToggle) {
                        setLoadingTimes(loadingTimes+9);
                        generateCharacters();
                        setLoadedToggle(false);
                    }
                }}
                >LOAD MORE</button>
            </div>
            
            <Detail
            characterAbout = {characterAbout} />
        </main>
    )
}

const View = ({loadingTimes}) => {

    const ar = [];

    for (let i = 0; i < loadingTimes; i++) {
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
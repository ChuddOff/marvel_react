import { useState, useEffect  } from 'react';
import MarvelServices from '../../services/marvelServices';

import './appRandom.css'
import '../App/App.css'

const RandomCharacter = () => {
    const marvelServices = new MarvelServices();

    const [character, setCharacter] = useState()

    const getCharacter = () => {
        setCharacter(null)
        marvelServices.getCharacter().then(res => {setCharacter(res.data.results[0])})
    }

    useEffect(() => {
        getCharacter();
    }, [])

    if (!character) {
        return (
            <div className="random">
                <div className="randomCharacter">
                    <img src="Spinner.svg" alt="" />
                </div>  
                <div className='randomTry'>
                    <h3>Random character for today! <br /> Do you want to get to know him better?</h3>
                    <h4>Or choose another one</h4>
                    <button 
                    className='buttonRed'
                    onClick={() => {getCharacter()}}
                    >TRY IT</button>
                    <img src="Decoration.png" alt="" />
                </div>
            </div>
        )
    }

    return (
        <div className="random">
            <div className="randomCharacter">
                <img src={character.thumbnail.path +'.'+ character.thumbnail.extension} alt="" />
                <div className='randomCharacterInfo'>
                    <h3>{character.name}</h3>
                    <h4>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</h4>
                    <div className='randomCharacterInfoButtons'>
                        <button className='buttonRed'>HOMEPAGE</button>
                        <button className='buttonGray'>WIKI</button>
                    </div>
                </div>
            </div>  
            <div className='randomTry'>
                <h3>Random character for today! <br /> Do you want to get to know him better?</h3>
                <h4>Or choose another one</h4>
                <button 
                className='buttonRed'
                onClick={() => {getCharacter()}}
                >TRY IT</button>
                <img src="Decoration.png" alt="" />
            </div>
        </div>
    );
}

export default RandomCharacter;
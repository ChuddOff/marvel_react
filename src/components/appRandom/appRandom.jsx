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

    return (
        <div className="random">

            {character ? <View character={character}/> : <Loading />}

            <div className='randomTry'>
                <h3>Random character for today! <br /> Do you want to get to know him better?</h3>
                <h4>Or choose another one</h4>
                <button 
                className='buttonRed'
                onClick={getCharacter}
                >TRY IT</button>
                <img src="Decoration.png" alt="character" />
            </div>
        </div>
    );
}

const View = ({character}) => {
    return(
        <div className="randomCharacter">
            <img src={character.thumbnail.path +'.'+ character.thumbnail.extension} alt="character" />
            <div className='randomCharacterInfo'>
                <h3>{character.name}</h3>
                <h4>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</h4>
                <div className='randomCharacterInfoButtons'>
                    <button className='buttonRed'>HOMEPAGE</button>
                    <button className='buttonGray'>WIKI</button>
                </div>
            </div>
        </div>
    )
}
const Loading = ({character}) => {
    return(
        <div className="randomCharacter placeholder-glow">
            <img className='placeholder' src='image_not_available.jpg' alt="image_not_available" />
            <div className='randomCharacterInfo placeholder-glow'>
                <h3 className='placeholder'>Orphan-MakerMaker</h3>
                <h4 className='placeholder'>As the Norse God</h4>
                <div className='randomCharacterInfoButtons'>
                    <button className='buttonRed placeholder'>HOMEPAGE</button>
                    <button className='buttonGray placeholder'>WIKI</button>
                </div>
            </div>
        </div>
    )
}
export default RandomCharacter;
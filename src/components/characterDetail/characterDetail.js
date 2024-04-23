import { useState, useEffect  } from 'react';

import './characterDetail.css'

const Detail = ({characterAbout}) => {

    if (!characterAbout) {
        return(
            <div className='charactersInfo placeholder-glow' aria-hidden="true"> 
                <div className='picture placeholder-glow'>
                    <img className='placeholder' src='image_not_available.jpg' alt="character" />
                    <div className='more placeholder-glow'>
                        <h3 className='placeholder'>Hawkeye</h3>
                        <div className='buttons'>
                            <button className="buttonRed disabled placeholder col-3">HOMEPAGE</button>
                            <button className="buttonGray disabled placeholder col-3">WIKI</button>
                        </div>
                    </div>
                </div>
                <h4 className='placeholder col-12 placeholder-xl'>In Norse mythology,In Norse mythology,In Norse mythology,In Norse mythology,</h4>
                <h3>Comics:</h3>
                <ul>
                    <h3 className='placeholder col-12'>Powers (2009) #9</h3>
                    <h3 className='placeholder col-12'>Powers (2009) #9</h3>
                    <h3 className='placeholder col-12'>Powers (2009) #9Powers (2009) #9</h3>
                </ul>
            </div>
        )
    }

    const comics = characterAbout.comics.items.map(item => {
        return <li><a href={item.resourceURI}>{item.name}</a></li>
        
    })

    return (
        <div className='charactersInfo'>
            <div className='picture'>
                <img src={characterAbout.thumbnail.path +'.'+ characterAbout.thumbnail.extension} alt="character" />
                <div className='more'>
                    <h3>{characterAbout.name}</h3>
                    <div className='buttons'>
                        <button className="buttonRed">HOMEPAGE</button>
                        <button className="buttonGray">WIKI</button>
                    </div>
                </div>
            </div>
            <h4>In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</h4>
            <h3>Comics:</h3>
            <ul>
                {comics.length == 0 ? <h3>There no comics!</h3> : comics}
            </ul>
        </div>
    )
}

export default Detail;
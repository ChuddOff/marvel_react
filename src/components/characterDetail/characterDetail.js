import { useState, useEffect  } from 'react';

import './characterDetail.css'

const Detail = ({characterAbout}) => {

    if (!characterAbout) {
        return null;
    }

    const comics = characterAbout.comics.items.map(item => {
        return <li><a href={item.resourceURI}>{item.name}</a></li>
        
    })

    return (
        <div className='charactersInfo'>
            <div className='picture'>
                <img src={characterAbout.thumbnail.path +'.'+ characterAbout.thumbnail.extension} alt="" />
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
                {comics}
            </ul>
        </div>
    )
}

export default Detail;
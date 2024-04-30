import { useState, useEffect  } from 'react';
import { NavLink } from "react-router-dom";

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
    
    const comics = characterAbout.comics.items.map((item, i) => {
        return <li key={i}><NavLink to={`/comics/${item.resourceURI.split('/')[6]}`}>📜 {item.name}</NavLink></li>
        
    })

    return (
        <div className='charactersInfo'>
            <div className='picture'>
                <img src={characterAbout.thumbnail.path +'.'+ characterAbout.thumbnail.extension} alt="character" />
                <div className='more'>
                    <h3>💖 {characterAbout.name}</h3>
                    <div className='buttons'>
                        <button className="buttonRed">HOMEPAGE</button>
                        <button className="buttonGray">WIKI</button>
                    </div>
                </div>
            </div>
            <h4>📌 {characterAbout.description ? characterAbout.description : 'No description...'}</h4>
            <h3>📢 Comics:</h3>
            <ul>
                {comics.length === 0 ? <h3>There no comics!</h3> : comics}
            </ul>
        </div>
    )
}

export default Detail;
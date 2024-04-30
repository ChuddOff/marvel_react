import { useState, useEffect } from 'react';
import MarvelServices from '../../services/marvelServices';
import ComicsItem from '../comicsItem/comicsItem';

import './appComics.css'
import '../App/App.css'

const ComicsBlock = () => {
    const MarvelService = new MarvelServices();
    const [comics, setComics] = useState([]);
    const [numerator, setNumerator] = useState(8);

    const getComics = () => {
        MarvelService.getAllComics().then(res => {
            setComics([...comics, ...res.data.results]);
        })
    }
    
    useEffect(() => {
        getComics();
    }, [])

    const el = comics.map((item, id) => {
        return(<ComicsItem 
            title={item.title}
            price={item.prices[0].price}
            path={item.thumbnail.path}
            extension={item.thumbnail.extension}
            id={item.id}
            key={id} />)
    })

    console.log(comics);

    return(
        <div className='comics'>
            <div className='banner'>
                <img src="/Avengers.png" alt="Avengers" />
                <h2>New comics every week! <br /> Stay tuned!</h2>
                <img src="/Avengers logo.png" alt="Avengers" />
            </div>
            <div className='comicsImems'>
                {el}
                {el.length !== numerator && <LoadingComics/>}
                <button 
                className='buttonRed'
                onClick={() => {
                    getComics();
                    setNumerator(numerator+8);
                }}>TRY IT</button>
            </div>
        </div>
    )
}

const LoadingComics = () => {
    const ar = [];

    for (let i = 0; i<8; i++) {
        ar.push(
            <div className='comicsItem placeholder-glow' key={i}>
                <img className='placeholder' src='UW.jpg' alt="comics" />
                <h3 className='placeholder col-11'>Loading</h3>
                <h4 className='placeholder col-11'>NOT AVAILABLE</h4>
            </div>
        )
    }

    return(
        <>
            {ar}
        </>
    )
}

export default ComicsBlock;
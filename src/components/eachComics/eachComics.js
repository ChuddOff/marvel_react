import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import MarvelServices from "../../services/marvelServices";
import './eachComics.css'

const EachComics = () => {
    const MarvelService = new MarvelServices();
    const {comicsId} = useParams();
    const navigate =  useNavigate();

    const [comics, setComics] = useState(null);

    useEffect(() => {
        MarvelService.getComicsDetails(comicsId).then(res => {
            console.log(res);
            setComics(res)
        })
    }, [])

    
    return (
        <main className='comics'>
            <div className='banner'>
                <img src="/Avengers.png" alt="Avengers" />
                <h2>New comics every week! <br /> Stay tuned!</h2>
                <img src="/Avengers logo.png" alt="Avengers" />
            </div>

            {comics ? <View comics={comics.data.results[0]} navigate={navigate}/> : <Loading />}
        </main>
    )
}

const Loading = () => {
    return (
        <div className='comicDitail placeholder-glow'>
            <img className="placeholder" src="/UW.jpg" alt="comics" />
            <div className='comicInfo'>
                <div className='comicText'>
                    <h2 className='placeholder col-11'>X-Men: Days of Future Past</h2>
                    <h3 className='placeholder col-11'>Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</h3>
                    <h3 className='placeholder col-11'>144 pages</h3>
                    <h3 className='placeholder col-11'>Language: en-us</h3>
                    <h2 className='placeholder col-11'>9.99$</h2>
                </div>
                <button>Back to all</button>
            </div>
        </div>
    )
}

const View = ({comics, navigate}) => {
    return (
        <div className='comicDitail'>
            <img src={comics.thumbnail.path + '.' + comics.thumbnail.extension} alt="comics" />
            <div className='comicInfo'>
                <div className='comicText'>
                    <h2>📖 {comics.title}</h2>
                    <h3>📌 {comics.description ? comics.description : 'No description('}</h3>
                    <h3>👁‍🗨 {comics.pageCount} pages</h3>
                    <h3>🌍 Language: en-us</h3>
                    <h2>{comics.prices[0].price == 0 ? '💳 No prise.' : comics.prices[0].price + '$'}</h2>
                </div>
                <button onClick={() => {navigate(-1)}}>🔻 Back to all 🔻</button>
            </div>
        </div>
    )
}

export default EachComics;
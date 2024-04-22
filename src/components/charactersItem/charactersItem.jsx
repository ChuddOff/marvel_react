import './charactersItem.css'

const Item = ({character, id, setCharacterAbout}) => {

    return (
        <div 
        className='item'
        onClick={() => {setCharacterAbout(id)}} >
            <img src={character.thumbnail.path +'.'+ character.thumbnail.extension} alt="" />
            <h3>{character.name}</h3>
        </div>
    )
}

export default Item;
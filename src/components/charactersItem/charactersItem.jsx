import './charactersItem.css'

const Item = ({name, url, id, setCharacterAbout}) => {

    return (
        <div 
        className='item'
        onClick={() => {setCharacterAbout(id)}} >
            <img src={url} alt="" />
            <h3>{name}</h3>
        </div>
    )
}

export default Item;
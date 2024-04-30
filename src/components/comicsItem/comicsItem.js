import { useNavigate } from "react-router-dom";

import './comicsItem.css'

const ComicsItem = ({title, price, path, extension, id}) => {
    const navigate =  useNavigate();

    return (
        <div 
        className='comicsItem'
        onClick={() => {
            navigate(`/comics/${id}`);
        }} >
            <img src={path + '.' + extension} alt="comics" />
            <h3>{title}</h3>
            {price === 0 ? <h4>NOT AVAILABLE</h4> : <h4>{price}$</h4>}
            
        </div>
    )
}


export default ComicsItem;
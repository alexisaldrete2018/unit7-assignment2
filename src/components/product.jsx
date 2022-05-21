import './product.css';
import QuantityPicker from './quantityPicker';

const Product = (props) => {
    // let  [] = useState(1);Question 

    return (
        <div className='product'>
            <img className='productImage' src={'/images/'+props.image}></img>
            <h2>{props.title}</h2>
            <br/>
            <label>Price: ${props.price}</label>
            <label>Total: 1</label>
            <QuantityPicker></QuantityPicker>
            <button className='addButton'>Add</button>
        </div>
    );
}

export default Product;
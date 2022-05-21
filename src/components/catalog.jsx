import Product from "./product";

const Catalog = () => {

    return(
        <div className="catalog">
            <Product image="apple.jpeg" title="Apple" price="10.00"/>
            <Product image="eggs.jpeg" title="Eggs" price="9.00"/>
            <Product image="fish.webp" title="Fish" price="8.00"/>
            <Product image="watermelon.jpeg" title="Watermelon" price="7.00"/>
            <Product image="mango.jpeg" title="Mango" price="6.00"/>
            <Product image="meat.jpeg" title="Meat" price="5.00"/>
            <Product image="milk.jpeg" title="Milk" price="4.00"/>
            <Product image="pear.jpeg" title="Pear" price="3.00"/>
        </div>
    );

}

export default Catalog;

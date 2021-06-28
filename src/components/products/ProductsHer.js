import React from 'react';
import { Link } from 'react-router-dom';
import CardComponent from '../card/CardComponent';
import { products } from '../data-images/products-images';
import "./ProductsHer.css"

const ProductsHer = () => {
    return (
        <div className="CardsProducts">
            {
                products.map(({id, product, name, link}) => (
                    <div key={id} className="CardsProductsHer">
                        <Link to={link} className="CardsProductsHerbalife">
                            <CardComponent product={product} name={name}/>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsHer;
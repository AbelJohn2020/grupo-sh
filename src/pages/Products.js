import React from 'react';
import ProductsHer from '../components/products/ProductsHer';

const Products = () => {
    return (
        <div>
            <div className="title">
                <h1 className="titleName">productos</h1>
            </div>
            <div className="products">
                <div className = "subtitle">
                    <h1 className="subtitleName">nutricion de calidad</h1>
                </div>
                <div className = "secondSubtitle">
                    <p className="secondSubtitleName">Productos de calidad basados en la ciencia. Productos que ayudan a que tu cuerpo obtenga los nutrientes que necesita.</p>
                </div>
                <div>
                    <ProductsHer />
                </div>
            </div>
        </div>
    )
}

export default Products;

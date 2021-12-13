import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProductPrice,
  ProductCardItem,
  ProductTitle,
} from './ProductCard.styles';
import AddToCart from '../AddToCart';

export default function ProductCard({ product }) {
  const {
    id,
    data: { name, mainimage, category, price, stock },
  } = product;
  return (
    <ProductCardItem>
      <Link to={`/products/${id}`}>
        <ProductTitle>{name}</ProductTitle>
        <img style={{ width: '100%' }} src={mainimage.url} alt={name} />
        <div> {category.slug} </div>
        <ProductPrice> ${price} </ProductPrice>
      </Link>
      <AddToCart product={product} maxQuantity={stock} />
    </ProductCardItem>
  );
}

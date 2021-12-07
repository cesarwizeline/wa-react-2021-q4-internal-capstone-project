import React from 'react';
import ProductCard from '../ProductCard';
import { ProductList } from './Products.styles';
import Pagination from '../Pagination';
import { useProducts } from '../../utils/hooks/useProducts';
import Loading from '../Loading';
export default function Products({ categoriesSelected }) {
  const [products, totalPages, isLoading] = useProducts(categoriesSelected);
  return (
    <ProductList>
      {isLoading && <Loading />}
      {!isLoading && products.length === 0 && 'No products founded :( '}
      {products &&
        products.map(({ id, data: { name, mainimage, category, price } }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              name={name}
              mainimage={mainimage}
              category={category}
              price={price}
            />
          );
        })}
      <Pagination totalPages={totalPages} />
    </ProductList>
  );
}

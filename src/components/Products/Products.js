import React from 'react';
import PropTypes from 'prop-types';
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
      {!isLoading && products.length === 0 && 'No products found :( '}
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      <Pagination totalPages={totalPages} />
    </ProductList>
  );
}

Products.propTypes = {
  categoriesSelected: PropTypes.array,
};

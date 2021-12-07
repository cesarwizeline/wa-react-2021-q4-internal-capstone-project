import { useState, useEffect, useRef } from 'react';
import { useApi } from './useApi';
import { useLocation } from 'react-router';
import { useSearch } from './useSearch';
export const useProducts = (categoriesSelected = []) => {
  const search = useLocation().search;
  let page = new URLSearchParams(search).get('page') ?? 1;
  let searcher = new URLSearchParams(search).get('q');
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(null);

  // const response = useSearch('product', 12, page);

  const response = useApi('product', 12, page);
  const productsResponse = response?.data.results;
  // const isLoading = response.isLoading;
  useEffect(() => {
    isMounted.current = true;
    setIsLoading(response.isLoading);
    if (!response.isLoading) {
      const productsData =
        categoriesSelected.length > 0
          ? productsResponse.filter((prod) =>
              categoriesSelected.includes(prod.data.category.id)
            )
          : productsResponse;
      if (isMounted.current) {
        setProducts(productsData);
        setTotalPages(response?.data?.total_pages);
      }
    }
    return () => {
      isMounted.current = false;
    };
  }, [productsResponse, response, categoriesSelected]);

  return [products, totalPages, isLoading];
};

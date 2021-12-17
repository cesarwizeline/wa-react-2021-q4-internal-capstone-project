import React from 'react';
import Products from '../../components/Products';
import Sidebar from '../../components/Sidebar';
import { ProductPageContent } from './ProductPage.style';
import { useProductCategories } from '../../utils/hooks/useProductCategories';

const ProductsPage = () => {
  const [
    categories,
    categoriesSelected,
    selectCategoryHandler,
    clearCategoriesHandler,
  ] = useProductCategories();

  return (
    <ProductPageContent>
      <Sidebar
        categories={categories}
        onSelectCategory={selectCategoryHandler}
        onClearCategories={clearCategoriesHandler}
      />
      <Products categoriesSelected={categoriesSelected} />
    </ProductPageContent>
  );
};
export default ProductsPage;

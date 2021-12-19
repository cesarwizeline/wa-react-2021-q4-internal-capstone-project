import { useState, useEffect } from 'react';
import { useApi } from './useApi';
import { useLocation } from 'react-router';

export const useProductCategories = () => {
  const search = useLocation().search;
  const categoryFromURL = new URLSearchParams(search).get('category');

  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const response = useApi('category', 12, 1);
  const [categories, setCategories] = useState([]);
  const selectCategoryHandler = (categoryId) => {
    setCategories((currentCategories) => {
      return currentCategories.map((category) => {
        if (category.id === categoryId) {
          return { ...category, isSelected: !category.isSelected };
        }
        return category;
      });
    });
  };

  const clearCategoriesHandler = () => {
    setCategories((currentCategories) => {
      return currentCategories.map((category) => {
        return { ...category, isSelected: false };
      });
    });
  };

  useEffect(() => {
    if (!response.isLoading) {
      const categoryFilter = response?.data?.results.find((category) =>
        category.slugs.includes(categoryFromURL)
      );

      const newCategories = response.data.results.map((category) => {
        category.isSelected = false;
        if (categoryFilter?.id === category.id) category.isSelected = true;

        return category;
      });
      setCategories(newCategories);
    }
  }, [response, categoryFromURL]);

  useEffect(() => {
    const filteredCategories = categories
      .filter((category) => category.isSelected)
      .map((category) => category.id);
    setCategoriesSelected([...filteredCategories]);
  }, [categories]);

  return [
    categories,
    categoriesSelected,
    selectCategoryHandler,
    clearCategoriesHandler,
  ];
};

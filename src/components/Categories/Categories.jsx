import React, { useContext } from 'react';
import { Category, CategoriesContainer } from './Categories.styles';
import { useApi } from '../../utils/hooks/useApi';
import ThemeContext from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
const Categories = () => {
  const response = useApi('category', 10, 1);
  const categories = response?.data?.results;
  const { showMenu } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <>
      {showMenu && (
        <CategoriesContainer>
          {categories &&
            categories.map((category) => {
              return (
                <Category
                  onClick={() => {
                    navigate(`/products?category=${category.slugs[0]}`);
                  }}
                  key={category.id}
                >
                  {category.data.name}
                </Category>
              );
            })}
        </CategoriesContainer>
      )}
    </>
  );
};
export default Categories;

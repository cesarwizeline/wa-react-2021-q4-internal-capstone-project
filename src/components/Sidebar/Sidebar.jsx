import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SidebarContent, SidebarItem } from './Sidebar.style';
import ThemeContext from '../../context/ThemeContext';
const Sidebar = ({ onSelectCategory, categories, onClearCategories }) => {
  const { showMenu } = useContext(ThemeContext);

  return (
    <SidebarContent className={showMenu && 'active'}>
      <SidebarItem>
        <h3>
          <i>Categories</i>
        </h3>
      </SidebarItem>
      {categories.map(({ id, isSelected, data: { name } }) => {
        return (
          <SidebarItem
            data-testid={id}
            key={id}
            onClick={() => onSelectCategory(id)}
          >
            <input type="checkbox" readOnly={true} checked={isSelected} />
            {` ${name}`}
          </SidebarItem>
        );
      })}
      <SidebarItem key={9} onClick={() => onClearCategories()}>
        Clear categories
      </SidebarItem>
    </SidebarContent>
  );
};
Sidebar.propTypes = {
  onSelectCategory: PropTypes.any.isRequired,
  onClearCategories: PropTypes.any.isRequired,
  categories: PropTypes.any.isRequired,
};
export default Sidebar;

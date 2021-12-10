import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInputContent, SearchButton } from './SearchInput.styles';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { useLocation } from 'react-router';
const SearchInput = () => {
  const search = useLocation().search;
  const productToSearch = new URLSearchParams(search).get('q') ?? null;
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(productToSearch);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`search?q=${inputValue}`);
      }}
    >
      <SearchInputContent
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Search Products..."
      />
      <SearchButton>
        <GiMagnifyingGlass />
      </SearchButton>
    </form>
  );
};
export default SearchInput;

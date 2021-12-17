import React from 'react';
import PropTypes from 'prop-types';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { PaginationContent, ButtonNumber } from './Pagination.style';
import { Link } from 'react-router-dom';
import usePages from '../../utils/hooks/usePages';
export default function Pagination({ totalPages }) {
  const [pages, currentPage] = usePages(totalPages);

  return (
    <PaginationContent>
      {currentPage > 1 && (
        <Link data-testid="previousPage" to={`?page=${currentPage - 1}`}>
          <BiLeftArrow />
        </Link>
      )}
      {pages.map((page) => (
        <ButtonNumber key={page}>
          {page === currentPage ? (
            page
          ) : (
            <Link to={`?page=${page}`}>{page}</Link>
          )}
        </ButtonNumber>
      ))}
      {currentPage < totalPages && (
        <Link data-testid="nextPage" to={`?page=${currentPage + 1}`}>
          <BiRightArrow />
        </Link>
      )}
    </PaginationContent>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
};

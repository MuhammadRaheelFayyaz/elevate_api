function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const showPrev = currentPage > 1;
  const showNext = currentPage < totalPages;

  const pagesToShow = 3; // Number of pages to show at a time

  const startPage = Math.max(currentPage - 1, 1);
  const endPage = Math.min(startPage + pagesToShow, totalPages);

  return (
    <div className='ml-auto '>
      {showPrev && (
        <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      )}

      {pageNumbers
        .slice(startPage - 1, endPage)
        .map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-10 w-10 hover:bg-blue-500 hover:border-white ${currentPage === page ? 'bg-blue-500 border-blue-500 border' : 'border-transparent border'}`}
          >
            {page}
          </button>
        ))}

      {showNext && (
        <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
      )}
    </div>
  );
}

export default Pagination
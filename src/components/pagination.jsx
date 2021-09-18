import React from 'react';
import _ from 'lodash';

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {

    const pagesCount = itemsCount / pageSize;

    if (pagesCount <= 1) return null;

    const pages = _.range(1, pagesCount+1)
    return ( 
        <nav style={{marginTop:5}} aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page => 
                        <li key={page} className={page === currentPage ? "page-item active" : "page-item" }>
                            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                        </li>)}
            
        </ul>
        </nav>
     );
}
 
export default Pagination;
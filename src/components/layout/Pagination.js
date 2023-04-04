
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className='md:w-[49%] lg:w-[32%] '>
             <Product src='images/product1.png' badge={true}/>
          </div>
        ))}
    </>
  );
}
const Pagination = ({itemsPerPage }) => {
 // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className='md:flex md:flex-wrap md:justify-between '>
      <Items currentItems={currentItems} />
    </div>
      <ReactPaginate
          nextLabel="hidden"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="hidden"
          pageClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-normal font-sm"
        //   pageLinkClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-normal font-sm"
          previousClassName="hidden"
          nextClassName="hidden"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="flex flex-wrap gap-x-4 gap-y-3.5 md:gap-y-0 mt-12"
          activeClassName="inline-block border border-solid border-[#F0F0F0] py-2 px-3.5 font-dm font-normal font-sm bg-primary text-white"
          renderOnZeroPageCount={null}
      />
        <h3 className='lg:absolute lg:bottom-5 lg:right-0 font-dm font-normal text-sm text-[#767676] mt-2.5 md:mt-0'>Products from {itemOffset} to {itemOffset+itemsPerPage} of {items.length}</h3>
    </>
  );
}

export default Pagination
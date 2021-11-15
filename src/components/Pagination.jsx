import ReactPaginate from "react-paginate";
import { useSelector, useDispatch} from "react-redux";
import {changePage} from '../actions'

function App() {
    const state = useSelector((state) => state.pagination)
    const dispatch = useDispatch()
  
  const onClick = (data) => {
    dispatch(changePage(data.selected+1))
  };
  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={state.numberOfPages}
      marginPagesDisplayed={4}
      pageRangeDisplayed={3}
      onPageChange={onClick}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}

export default App;

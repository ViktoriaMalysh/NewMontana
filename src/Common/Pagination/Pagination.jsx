import { Icon } from "semantic-ui-react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

const CustomPagination = ({ handlePageClick, pageCount }) => {

	return (
		<ReactPaginate
			className={styles.paginate}
      pageClassName={styles.pageClassName}
      nextClassName={styles.nextClassName}

			breakLabel="..."
			onPageChange={handlePageClick}
			pageRangeDisplayed={5}
			pageCount={pageCount}
			previousLabel={<Icon name="arrow left" />}
			nextLabel={<Icon name="arrow right" />}
			renderOnZeroPageCount={null}
		/>
	);
};

export default CustomPagination;

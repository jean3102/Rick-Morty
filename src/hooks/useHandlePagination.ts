import { useSearchParams } from 'react-router-dom';

const useHandlePagination = () => {
	const [searchParam, setSearchParams] = useSearchParams();
	const { page } = { page: searchParam.get('page') };
	let currentPage = Number(page);

	const handleNextPage = () => {
		currentPage = Number(page) + 1;
		setSearchParams({ page: String(currentPage) });
	};

	const handlePreviousPage = () => {
		if (currentPage <= 1) return;

		currentPage = Number(page) - 1;
		setSearchParams({ page: String(currentPage) });
	};

	return { handlePreviousPage, handleNextPage };
};

export default useHandlePagination;

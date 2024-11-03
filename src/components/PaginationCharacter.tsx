import useHandlePagination from '@/hooks/useHandlePagination';
import './styles/paginationCharacter.style.css';
const PaginationCharacter = () => {
	const { handleNextPage, handlePreviousPage } = useHandlePagination();
	return (
		<section className='paginationCharacter'>
			<button onClick={handlePreviousPage}>Previous</button>
			<button onClick={handleNextPage}>Next</button>
		</section>
	);
};

export default PaginationCharacter;

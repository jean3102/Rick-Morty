import PaginationCharacter from '@/components/PaginationCharacter';
import useHandlePagination from '@/hooks/useHandlePagination';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('@/hooks/useHandlePagination');
describe('<PaginationCharacter/>', () => {
	const mockHandlePreviousPage = jest.fn();
	const mockHandleNextPage = jest.fn();
	test('calls handle previous and next page when button is clicked ', () => {
		(useHandlePagination as jest.Mock).mockReturnValueOnce({
			handlePreviousPage: mockHandlePreviousPage,
			handleNextPage: mockHandleNextPage,
		});

		render(<PaginationCharacter />);
		const previousPage = screen.getByText(/previous/i);
		const nextPage = screen.getByText(/next/i);
		fireEvent.click(previousPage);
		fireEvent.click(nextPage);

		expect(mockHandlePreviousPage).toHaveBeenCalled();
		expect(mockHandleNextPage).toHaveBeenCalled();
	});
	
});

import useHandlePagination from '@/hooks/useHandlePagination';
import { renderHook } from '@testing-library/react';
import { useSearchParams } from 'react-router-dom';

jest.mock('react-router-dom');
describe('useHandlePagination', () => {
	const useSearchParamsMock = useSearchParams as jest.Mock;
	const searchParamMock = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});
	test('should navigate to next page', () => {
		useSearchParamsMock.mockReturnValue([
			new URLSearchParams({ page: '1' }),
			searchParamMock,
		]);
		const { result } = renderHook(() => useHandlePagination());
		const { handleNextPage } = result.current;
		handleNextPage();
		expect(searchParamMock).toHaveBeenCalledWith({ page: '2' });
	});

	test('should navigate to previous page', () => {
		useSearchParamsMock.mockReturnValueOnce([
			new URLSearchParams({ page: '2' }),
			searchParamMock,
		]);

		const { result } = renderHook(() => useHandlePagination());
		const { handlePreviousPage } = result.current;
		handlePreviousPage();
		expect(searchParamMock).toHaveBeenCalledWith({ page: '1' });
	});

	test('should not decrement below page 1', () => {
		useSearchParamsMock.mockReturnValueOnce([new URLSearchParams({ page: '1' })]);
		const { result } = renderHook(() => useHandlePagination());
		const { handlePreviousPage } = result.current;
		handlePreviousPage();
		expect(searchParamMock).not.toHaveBeenCalled();
	});

	test('should go to second page when you are first page for first time', () => {
		useSearchParamsMock.mockReturnValueOnce([
			new URLSearchParams(),
			searchParamMock,
		]);
		const { result } = renderHook(() => useHandlePagination());
		const { handleNextPage } = result.current;
		handleNextPage();
		expect(searchParamMock).toHaveBeenCalledWith({ page: '2' });
	});
});

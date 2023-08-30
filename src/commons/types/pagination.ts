export interface Pagination<T> {
  currentPage: number;
  data: T[];
  nextPage?: number;
  prevPage?: number;
  total: number;
  totalPages: number;
}
